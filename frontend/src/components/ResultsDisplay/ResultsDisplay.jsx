// ResultsDisplay.jsx
import React from 'react';
import './ResultsDisplay.css'; // Ensure to create and link this CSS file

function ResultsDisplay({ sitemapUrl }) {
  return (
    <div className="results-container">
      {sitemapUrl && (
        <>
          <p className="results-text">Sitemap generated successfully!</p>
          <a href={sitemapUrl} download className="download-button">Download Sitemap</a>
        </>
      )}
    </div>
  );
}

export default ResultsDisplay;
