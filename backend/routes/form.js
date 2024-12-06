// backend/src/routes/forms.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form');

router.post('/', async (req, res) => {
  try {
    const { title, description, headerImage, questions } = req.body;

    // Create and save the form
    const form = new Form({ title, description, headerImage, questions });
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    console.error('Error saving form:', error);
    res.status(400).json({ message: 'Failed to save the form', details: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) throw new Error('Form not found');
    res.json(form);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;

