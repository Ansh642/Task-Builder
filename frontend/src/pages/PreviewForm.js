import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PreviewForm = () => {
  const { formId } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/forms/${formId}`);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching the form:', error);
        alert('Form not found');
      }
    };
    fetchForm();
  }, [formId]);

  const handleInputChange = (questionIndex, value) => {
    setResponses({ ...responses, [questionIndex]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/responses`, {
        formId,
        answers: responses,
      });
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
      {form.headerImage && <img src={form.headerImage} alt="Header" className="mb-4 w-full" />}
      <form onSubmit={handleSubmit}>
        {form.questions.map((question, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold mb-2">{question.question}</h2>
            {question.image && <img src={question.image} alt="Question" className="mb-2 w-full" />}
            {question.type === 'Categorize' && (
              <select
                className="p-2 border rounded w-full"
                onChange={(e) => handleInputChange(index, e.target.value)}
              >
                {question.options.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {question.type === 'Cloze' && (
              <input
                type="text"
                placeholder="Fill in the blank"
                className="p-2 border rounded w-full"
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            )}
            {question.type === 'Comprehension' && (
              <textarea
                placeholder="Enter your answer"
                className="p-2 border rounded w-full"
                rows="4"
                onChange={(e) => handleInputChange(index, e.target.value)}
              ></textarea>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Responses
        </button>
      </form>
    </div>
  );
};

export default PreviewForm;
