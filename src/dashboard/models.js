import React, { useState } from 'react';
import axios from 'axios';

const PostDataForm = () => {
  const [selectedModel, setSelectedModel] = useState('research');
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  // Define input fields for each model
  const modelFields = {
    research: ['title', 'description', 'image'],
    publications: ['title', 'author', 'year', 'topic'],
    portfolio: ['title', 'description', 'image'],
    course: ['title', 'cover', 'rating', 'ratingCount', 'price']
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
    setFormData({}); // Reset form data when switching models
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/${selectedModel}`, formData);
      setMessage(response.data.message);
      setFormData({}); // Clear form data on success
    } catch (error) {
      setMessage('Error submitting data');
    }
  };

  return (
    <div>
      <h2>Submit Data</h2>
      <label>Select Model:</label>
      <select value={selectedModel} onChange={handleModelChange}>
        <option value="research">Research</option>
        <option value="publications">Publication</option>
        <option value="portfolio">Portfolio</option>
        <option value="course">Course</option>
      </select>

      <form onSubmit={handleSubmit}>
        {modelFields[selectedModel].map((field) => (
          <div key={field}>
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
            <input
              type={field === 'image' || field === 'cover' ? 'url' : 'text'}
              name={field}
              value={formData[field] || ''}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default PostDataForm;
