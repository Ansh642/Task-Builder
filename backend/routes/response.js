// backend/src/routes/responses.js
const express = require('express');
const router = express.Router();
const Response = require('../models/reponse');

router.post('/', async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;