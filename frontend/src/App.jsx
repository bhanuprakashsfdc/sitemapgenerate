// App.js
import React, { useState } from 'react';
import URLInput from './components/URLInput/URLInput';
import ResultsDisplay from './components/ResultsDisplay/ResultsDisplay';
import Spinner from './components/Spinner/Spinner';
import Notification from './components/Notification/Notification';
import AdvancedSettings from './components/AdvancedSettings/AdvancedSettings'; // Ensure this component is correctly imported


import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [sitemapUrl, setSitemapUrl] = useState(null);
  const [settings, setSettings] = useState({
    includeImages: false,
    includeVideos: false,
    excludeURLs: []
  });

  const handleGenerateSitemap = async (url) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Simulate an API call to generate the sitemap
    try {
      // Placeholder for sitemap generation logic
      setTimeout(() => {
        setSitemapUrl("https://example.com/sitemap.xml"); // Simulated URL
        setSuccess(true);
        setLoading(false);
      }, 2000);
    } catch (error) {
      setError('Failed to generate sitemap: ' + error.message);
      setLoading(false);
    }
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="App">
      <h1>Sitemap Generator</h1>
      <URLInput onSubmit={handleGenerateSitemap} />
      <AdvancedSettings onSettingsChange={handleSettingsChange} />
      {loading && <Spinner />}
      {error && <Notification message={error} type="error" />}
      {success && <Notification message="Sitemap generated successfully!" type="success" />}
      {sitemapUrl && <ResultsDisplay sitemapUrl={sitemapUrl} />}
    </div>
  );
}

export default App;
