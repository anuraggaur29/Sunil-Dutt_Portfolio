import express from 'express';

const router = express.Router();

// Premium calculator endpoint
// Example: POST /api/calculator/estimate
// Body: { age, sumAssured, term, planType }
router.post('/estimate', async (req, res) => {
  try {
    const { age, sumAssured, term, planType } = req.body;

    if (!age || !sumAssured || !term) {
      return res.status(400).json({ error: 'Age, sum assured, and term are required' });
    }

    // Simple calculation formula (placeholder - replace with actual LIC rates)
    // Annual Premium = (Sum Assured * Rate per 1000) / 1000
    // Rate varies by age, plan type, and term

    const baseRate = calculateBaseRate(age, term, planType);
    const annualPremium = (sumAssured * baseRate) / 1000;
    const monthlyPremium = annualPremium / 12;

    res.json({
      age,
      sumAssured,
      term,
      planType,
      annualPremium: Math.round(annualPremium * 100) / 100,
      monthlyPremium: Math.round(monthlyPremium * 100) / 100,
      quarterlyPremium: Math.round((annualPremium / 4) * 100) / 100,
      note: 'This is an estimate. Actual premium may vary based on medical underwriting and other factors.',
      disclaimer: 'For accurate quote, please contact the agent.'
    });
  } catch (error) {
    console.error('Error in calculator:', error);
    res.status(500).json({ error: 'Failed to calculate premium' });
  }
});

// Helper function to calculate base rate (placeholder)
function calculateBaseRate(age, term, planType) {
  // Simplified rates - replace with actual LIC rates
  const baseRates = {
    'term': 2.5,
    'endowment': 8.0,
    'moneyback': 7.5,
    'wholelife': 6.0,
    'pension': 5.0
  };

  let rate = baseRates[planType?.toLowerCase()] || 5.0;
  
  // Age adjustment (increases with age)
  if (age < 25) rate *= 0.8;
  else if (age > 50) rate *= 1.5;

  // Term adjustment
  if (term > 25) rate *= 1.2;

  return rate;
}

export default router;
