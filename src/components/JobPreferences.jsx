import React, { useState } from 'react';
import LocationFilter from './LocationFilter';

// Form for the user's saved job preferences: target keywords + preferred location.
export default function JobPreferences({ profile, onSave, onClear }) {
  const [keywordsText, setKeywordsText] = useState(profile ? profile.keywords.join(', ') : '');
  const [preferredLocation, setPreferredLocation] = useState(profile ? profile.preferredLocation : '');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      keywords: keywordsText.split(','),
      preferredLocation,
    });
    setSaved(true);
  };

  const handleClear = () => {
    setKeywordsText('');
    setPreferredLocation('');
    setSaved(false);
    onClear();
  };

  return (
    <div className="preferences-view">
      <h2>Job Preferences</h2>
      <p className="section-description">
        Tell us what you're looking for. We'll use this to preview matched jobs and pre-fill your search.
      </p>

      <form className="preferences-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span className="form-label">Target roles / keywords</span>
          <input
            type="text"
            className="search-input"
            placeholder="e.g. frontend, react, product manager"
            value={keywordsText}
            onChange={(e) => { setKeywordsText(e.target.value); setSaved(false); }}
          />
          <span className="form-hint">Separate multiple keywords with commas.</span>
        </label>

        <div className="form-field">
          <span className="form-label">Preferred location</span>
          <LocationFilter
            locationFilter={preferredLocation}
            setLocationFilter={(loc) => { setPreferredLocation(loc); setSaved(false); }}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-button">Save preferences</button>
          {profile && (
            <button type="button" className="secondary-button" onClick={handleClear}>Clear</button>
          )}
        </div>
      </form>

      {saved && <div className="success-message">✅ Preferences saved.</div>}
    </div>
  );
}
