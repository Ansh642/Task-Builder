const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  content: { type: String, required: true }, // Added `content`
  image: { type: String },
  options: { type: Array, default: [] },
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  headerImage: { type: String },
  questions: { type: [QuestionSchema], required: true },
});

module.exports = mongoose.model('Form', FormSchema);