import React from 'react';

const Question = ({ question, onChange }) => {
  const updateQuestion = (field, value) => {
    onChange({ ...question, [field]: value });
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="text-xl font-bold mb-2">{question.type} Question</h2>
      <input
        type="text"
        placeholder="Question"
        className="w-full p-2 mb-2 border rounded"
        value={question.question}
        onChange={(e) => updateQuestion('question', e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-2 border rounded"
        value={question.image}
        onChange={(e) => updateQuestion('image', e.target.value)}
      />
      {/* Add specific options for question types */}
    </div>
  );
};

export default Question;
