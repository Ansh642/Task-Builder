import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormPreview = ({ formId }) => {
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/forms/${formId}`);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching form:', error);
        alert('Form not found');
      }
    };
    fetchForm();
  }, [formId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/responses`, { formId, answers: responses });
      alert('Responses submitted successfully!');
    } catch (error) {
      console.error('Error submitting responses:', error);
      alert('Failed to submit responses');
    }
  };

  if (!form) return <div>Loading form...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{form.title}</h1>
      <p className="mb-4">{form.description}</p>
      {form.headerImage && <img src={form.headerImage} alt="Form header" className="mb-4 w-full" />}
      <form onSubmit={handleSubmit}>
        {form.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold mb-2">{question.question}</h2>
            {question.image && <img src={question.image} alt="Question" className="mb-2 w-full" />}
            {/* Handle different question types */}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;
