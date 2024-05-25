// AdvancedSettings.jsx
import React, { useState } from 'react';
import './AdvancedSettings.css';

function AdvancedSettings({ onSubmit }) {
  const [formData, setFormData] = useState({
    includeImages: false,
    includeVideos: false,
    excludeURLs: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <label className="container">Include Images
        <input
          type="checkbox"
          name="includeImages"
          checked={formData.includeImages}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">Include Videos
        <input
          type="checkbox"
          name="includeVideos"
          checked={formData.includeVideos}
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
      <input
        type="text"
        name="excludeURLs"
        value={formData.excludeURLs}
        onChange={handleChange}
        placeholder="Exclude URLs (comma-separated)"
        className="input-field"
      />
      <button type="submit" className="submit-button">Update Settings</button>
    </form>
  );
}

export default AdvancedSettings;

