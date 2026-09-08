import React from 'react';
import JobCard from './JobCard';

export default function JobList({ jobs, onSelectJob }) {
  if (jobs.length === 0) {
    return (
      <div className="no-results">
        <h2>No results found</h2>
        <p>Try adjusting your keyword search or location filter.</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} onSelect={onSelectJob} />
      ))}
    </div>
  );
}
