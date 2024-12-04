const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
  answers: { type: [Object], required: true }, // { questionId, answer }
});

module.exports = mongoose.model('Response', ResponseSchema);
