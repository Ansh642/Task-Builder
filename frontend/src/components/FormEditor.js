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
      questions: [...prevForm.questions, { type, question: '', image: '', options: [] }],
    }));
  };

  const saveForm = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/forms', form);
      toast.success('Form saved successfully!');
      // Reset form state
      setForm({
        title: '',
        description: '',
        headerImage: '',
        questions: [],
      });
    } catch (error) {
      console.error('Error saving form:', error);
      toast.error('Failed to save the form');
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
        <Question
          key={index}
          question={question}
          onChange={(updatedQuestion) => {
            const newQuestions = [...form.questions];
            newQuestions[index] = updatedQuestion;
            setForm({ ...form, questions: newQuestions });
          }}
        />
      ))}
      <button onClick={saveForm} className="bg-purple-500 text-white p-2 rounded">
        Save Form
      </button>
    </div>
  );
};

export default FormEditor;
