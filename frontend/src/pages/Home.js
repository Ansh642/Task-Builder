import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
        />
        <br />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => alert('Enter Form ID functionality not yet implemented!')}
        >
          Preview Form
        </button>
      </div>
    </div>
  );
};

export default Home;
