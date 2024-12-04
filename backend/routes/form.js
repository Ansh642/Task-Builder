// backend/src/routes/forms.js
const express = require('express');
const router = express.Router();
const Form = require('../models/form');

router.post('/', async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (error) {
    res.status(400).json({ message: error.message });
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

