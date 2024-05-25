// URLInput.jsx
import React, { useState } from 'react';
import './URLInput.css'; // Ensure to create and link this CSS file

function URLInput({ onSubmit }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter website URL"
        className="url-input"
      />
      <button type="submit" className="url-submit-button">Generate Sitemap</button>
    </form>
  );
}

export default URLInput;
