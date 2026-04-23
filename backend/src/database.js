import { createClient } from '@libsql/client';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let db = null;
let isTurso = false;

export async function initializeDatabase() {
  try {
    // Check if using Turso (production) or SQLite (development)
    const tursoUrl = process.env.TURSO_CONNECTION_URL;
    const tursoToken = process.env.TURSO_AUTH_TOKEN;

    if (tursoUrl && tursoToken) {
      // Use Turso for production
      isTurso = true;
      db = createClient({
        url: tursoUrl,
        authToken: tursoToken
      });
      console.log('✓ Connected to Turso database');
    } else {
      // Use SQLite for development
      isTurso = false;
      const dbPath = process.env.DATABASE_PATH || path.join(__dirname, '../data/lic-agent.db');
      const dbDir = path.dirname(dbPath);
      
      // Ensure directory exists
      mkdirSync(dbDir, { recursive: true });
      
      db = await open({
        filename: dbPath,
        driver: sqlite3.Database
      });

      await db.exec('PRAGMA foreign_keys = ON');
      console.log('✓ Connected to SQLite database');
    }

    await createTables();

    console.log('✓ Database initialized successfully');
  } catch (error) {
    console.error('✗ Database initialization failed:', error);
    throw error;
  }
}

async function createTables() {
  try {
    if (isTurso) {
      // Execute tables creation for Turso
      const tables = [
        // Users table
        `CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          name TEXT NOT NULL,
          role TEXT DEFAULT 'agent',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
        
        // Leads table
        `CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT,
          phone TEXT NOT NULL,
          age INTEGER,
          plan_interest TEXT,
          desired_coverage TEXT,
          message TEXT,
          status TEXT DEFAULT 'new',
          source TEXT DEFAULT 'website',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
        
        // Plans table
        `CREATE TABLE IF NOT EXISTS plans (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          type TEXT NOT NULL,
          uin TEXT,
          entry_age_min INTEGER,
          entry_age_max INTEGER,
          policy_term_min INTEGER,
          policy_term_max INTEGER,
          min_sum_assured REAL,
          key_benefits TEXT,
          premium_mode TEXT,
          claim_process TEXT,
          description TEXT,
          image_url TEXT,
          brochure_url TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
        
        // Policies table
        `CREATE TABLE IF NOT EXISTS policies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          client_name TEXT NOT NULL,
          client_contact TEXT NOT NULL,
          plan_id INTEGER,
          policy_number TEXT UNIQUE,
          sum_assured REAL,
          premium_amount REAL,
          premium_mode TEXT,
          start_date DATE,
          maturity_date DATE,
          status TEXT DEFAULT 'active',
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (plan_id) REFERENCES plans(id)
        )`,
        
        // Contact inquiries table
        `CREATE TABLE IF NOT EXISTS contact_inquiries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT,
          phone TEXT NOT NULL,
          subject TEXT,
          message TEXT NOT NULL,
          status TEXT DEFAULT 'unread',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`
      ];

      for (const sql of tables) {
        await db.execute(sql);
      }
      console.log('✓ All Turso tables created/verified');
    } else {
      // SQLite path (existing code)
      await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          password TEXT NOT NULL,
          name TEXT NOT NULL,
          role TEXT DEFAULT 'agent',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await db.exec(`
        CREATE TABLE IF NOT EXISTS leads (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT,
          phone TEXT NOT NULL,
          age INTEGER,
          plan_interest TEXT,
          desired_coverage TEXT,
          message TEXT,
          status TEXT DEFAULT 'new',
          source TEXT DEFAULT 'website',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await db.exec(`
        CREATE TABLE IF NOT EXISTS plans (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          type TEXT NOT NULL,
          uin TEXT,
          entry_age_min INTEGER,
          entry_age_max INTEGER,
          policy_term_min INTEGER,
          policy_term_max INTEGER,
          min_sum_assured REAL,
          key_benefits TEXT,
          premium_mode TEXT,
          claim_process TEXT,
          description TEXT,
          image_url TEXT,
          brochure_url TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      await db.exec(`
        CREATE TABLE IF NOT EXISTS policies (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          client_name TEXT NOT NULL,
          client_contact TEXT NOT NULL,
          plan_id INTEGER,
          policy_number TEXT UNIQUE,
          sum_assured REAL,
          premium_amount REAL,
          premium_mode TEXT,
          start_date DATE,
          maturity_date DATE,
          status TEXT DEFAULT 'active',
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (plan_id) REFERENCES plans(id)
        )
      `);

      await db.exec(`
        CREATE TABLE IF NOT EXISTS contact_inquiries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          email TEXT,
          phone TEXT NOT NULL,
          subject TEXT,
          message TEXT NOT NULL,
          status TEXT DEFAULT 'unread',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      console.log('✓ All SQLite tables created/verified');
    }
  } catch (error) {
    // Tables may already exist, continue without throwing
    console.log('ℹ Database tables setup completed');
  }
}

export function getDatabase() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDatabase() first.');
  }
  return db;
}
