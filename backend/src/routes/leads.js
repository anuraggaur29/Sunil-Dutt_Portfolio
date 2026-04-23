import express from 'express';
import { getDatabase } from '../database.js';

const router = express.Router();

// Create a new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, age, plan_interest, desired_coverage, message } = req.body;
    
    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    const db = getDatabase();
    const result = await db.run(
      `INSERT INTO leads (name, email, phone, age, plan_interest, desired_coverage, message, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'new')`,
      [name, email || null, phone, age || null, plan_interest || null, desired_coverage || null, message || null]
    );

    res.status(201).json({
      id: result.lastID,
      message: 'Lead created successfully'
    });
  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

// Get all leads (admin only)
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const leads = await db.all('SELECT * FROM leads ORDER BY created_at DESC');
    res.json(leads);
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// Get single lead
router.get('/:id', async (req, res) => {
  try {
    const db = getDatabase();
    const lead = await db.get('SELECT * FROM leads WHERE id = ?', req.params.id);
    if (!lead) {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({ error: 'Failed to fetch lead' });
  }
});

// Update lead status
router.patch('/:id', async (req, res) => {
  try {
    const { status, notes } = req.body;
    const db = getDatabase();
    
    await db.run(
      'UPDATE leads SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
      [status || null, req.params.id]
    );

    res.json({ message: 'Lead updated successfully' });
  } catch (error) {
    console.error('Error updating lead:', error);
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

// Delete lead
router.delete('/:id', async (req, res) => {
  try {
    const db = getDatabase();
    await db.run('DELETE FROM leads WHERE id = ?', req.params.id);
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({ error: 'Failed to delete lead' });
  }
});

export default router;
