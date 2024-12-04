import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FormEditor from './components/FormEditor';
import FormPreview from './components/FormPreview';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<FormEditor />} />
        <Route path="/preview/:formId" element={<FormPreview />} />
      </Routes>
    </Router>
  );
};

export default App;
