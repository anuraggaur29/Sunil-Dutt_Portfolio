import express from 'express';
import { getDatabase } from '../database.js';

const router = express.Router();

// Get all plans
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const plans = await db.all('SELECT * FROM plans ORDER BY id');
    res.json(plans);
  } catch (error) {
    console.error('Error fetching plans:', error);
    res.status(500).json({ error: 'Failed to fetch plans' });
  }
});

// Get single plan
router.get('/:id', async (req, res) => {
  try {
    const db = getDatabase();
    const plan = await db.get('SELECT * FROM plans WHERE id = ?', req.params.id);
    if (!plan) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    res.json(plan);
  } catch (error) {
    console.error('Error fetching plan:', error);
    res.status(500).json({ error: 'Failed to fetch plan' });
  }
});

// Create new plan (admin only)
router.post('/', async (req, res) => {
  try {
    const {
      name, type, uin, entry_age_min, entry_age_max,
      policy_term_min, policy_term_max, min_sum_assured,
      key_benefits, premium_mode, claim_process, description,
      image_url, brochure_url
    } = req.body;

    const db = getDatabase();
    const result = await db.run(
      `INSERT INTO plans (
        name, type, uin, entry_age_min, entry_age_max,
        policy_term_min, policy_term_max, min_sum_assured,
        key_benefits, premium_mode, claim_process, description,
        image_url, brochure_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name, type, uin, entry_age_min, entry_age_max,
        policy_term_min, policy_term_max, min_sum_assured,
        key_benefits, premium_mode, claim_process, description,
        image_url, brochure_url
      ]
    );

    res.status(201).json({
      id: result.lastID,
      message: 'Plan created successfully'
    });
  } catch (error) {
    console.error('Error creating plan:', error);
    res.status(500).json({ error: 'Failed to create plan' });
  }
});

export default router;
