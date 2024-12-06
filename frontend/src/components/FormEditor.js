import React, { useState } from 'react';
import Question from './QuestionsEditor';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEditor = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    headerImage: '',
    questions: [],
  });

  const addQuestion = (type) => {
    setForm((prevForm) => ({
      ...prevForm,
      questions: [
        ...prevForm.questions,
        { type, content: '', image: '', options: [] }, // Added `content`
      ],
    }));
  };

  const validateForm = () => {
    if (!form.title.trim() || !form.description.trim()) {
      toast.error('Title and description are required.');
      return false;
    }
    for (const question of form.questions) {
      if (!question.type || !question.content.trim()) {
        toast.error('All questions must have a type and content.');
        return false;
      }
    }
    return true;
  };

  const saveForm = async () => {
    if (!validateForm()) return;

    try {
      console.log('Form payload:', form);
      const response = await axios.post('http://localhost:5000/api/forms', form);
      toast.success('Form saved successfully!');
      setForm({
        title: '',
        description: '',
        headerImage: '',
        questions: [],
      });
    } catch (error) {
      console.error('Error saving form:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to save the form');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Form Editor</h1>
      <input
        type="text"
        placeholder="Form Title"
        className="w-full p-2 mb-4 border rounded"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Form Description"
        className="w-full p-2 mb-4 border rounded"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Header Image URL"
        className="w-full p-2 mb-4 border rounded"
        value={form.headerImage}
        onChange={(e) => setForm({ ...form, headerImage: e.target.value })}
      />
      <div className="mb-4">
        <button onClick={() => addQuestion('Categorize')} className="bg-blue-500 text-white p-2 rounded mr-2">
          Add Categorize
        </button>
        <button onClick={() => addQuestion('Cloze')} className="bg-green-500 text-white p-2 rounded mr-2">
          Add Cloze
        </button>
        <button onClick={() => addQuestion('Comprehension')} className="bg-yellow-500 text-white p-2 rounded">
          Add Comprehension
        </button>
      </div>
      {form.questions.map((question, index) => (
        <div key={index} className="mb-4 border p-2 rounded">
          <h3 className="font-semibold">Question {index + 1} ({question.type})</h3>
          <textarea
            placeholder="Enter question content"
            className="w-full p-2 mb-2 border rounded"
            value={question.content}
            onChange={(e) => {
              const updatedQuestions = [...form.questions];
              updatedQuestions[index].content = e.target.value;
              setForm({ ...form, questions: updatedQuestions });
            }}
          />
        </div>
      ))}
      <button onClick={saveForm} className="bg-purple-500 text-white p-2 rounded">
        Save Form
      </button>
    </div>
  );
};

export default FormEditor;
