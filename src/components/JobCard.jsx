import React from 'react';

export default function JobCard({ job, onSelect }) {
  return (
    <div className="job-card" onClick={() => onSelect(job)}>
      <div className="job-card-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-location">📍 {job.location}</span>
      </div>
      <h4 className="job-company">{job.company}</h4>
      <p className="job-preview">{job.description.length > 100 ? job.description.substring(0, 100) + '...' : job.description}</p>
    </div>
  );
}
