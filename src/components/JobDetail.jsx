import React from 'react';

export default function JobDetail({ job, onBack }) {
  if (!job) return null;

  return (
    <div className="job-detail-container">
      <button className="back-button" onClick={onBack}>
        &larr; Back to Results
      </button>
      
      <div className="job-detail-content">
        <h2 className="job-detail-title">{job.title}</h2>
        <h3 className="job-detail-company">{job.company}</h3>
        <p className="job-detail-location">📍 {job.location}</p>
        
        <div className="job-description-section">
          <h4>Job Description</h4>
          <p className="job-detail-description">{job.description}</p>
        </div>
      </div>
    </div>
  );
}
