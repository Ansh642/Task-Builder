import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [formId, setFormId] = useState('');
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePreviewForm = async () => {
    if (!formId) {
      setError('Please enter a Form ID');
      return;
    }

    try {
      setError('');
      const response = await fetch(`http://localhost:5000/api/forms/${formId}`);
      if (!response.ok) {
        throw new Error('Form not found');
      }
      const data = await response.json();
      setFormData(data);
    } catch (err) {
      setFormData(null);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Form Builder</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => navigate('/editor')}
      >
        Create a New Form
      </button>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter Form ID to Preview"
          className="p-2 border rounded w-64 mb-2"
          value={formId}
          onChange={(e) => setFormId(e.target.value)}
        />
        <br />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handlePreviewForm}
        >
          Preview Form
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {formData && (
          <div className="mt-4 border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">Form Preview</h2>
            <pre className="text-left">{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
