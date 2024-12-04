const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Categorize, Cloze, or Comprehension
  content: { type: String, required: true },
  options: { type: [String], default: [] }, // For Categorize
  image: { type: String }, // Image URL for the question
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  headerImage: { type: String }, // URL for the header image
  questions: { type: [QuestionSchema], required: true },
});

module.exports = mongoose.model('Form', FormSchema);
