import React from 'react';
import JobCard from './JobCard';
import { matchJobs } from '../utils/matchJobs';

const PREVIEW_COUNT = 3;

// Preview of the jobs that best fit the saved profile, shown above the search.
export default function MatchedJobs({ jobs, profile, onSelectJob, onUseProfile, onEditProfile }) {
  const matched = matchJobs(jobs, profile);
  const preview = matched.slice(0, PREVIEW_COUNT);

  return (
    <section className="matched-jobs">
      <div className="matched-jobs-header">
        <div>
          <h2>Matched for you</h2>
          <p className="section-description">
            {matched.length === 0
              ? 'No jobs match your saved preferences yet.'
              : `${matched.length} job${matched.length === 1 ? '' : 's'} match your saved preferences.`}
          </p>
        </div>
        <div className="matched-jobs-actions">
          <button type="button" className="primary-button" onClick={onUseProfile}>
            Use saved profile
          </button>
          <button type="button" className="secondary-button" onClick={onEditProfile}>
            Edit preferences
          </button>
        </div>
      </div>

      {preview.length > 0 && (
        <div className="job-list">
          {preview.map(job => (
            <JobCard key={job.id} job={job} onSelect={onSelectJob} />
          ))}
        </div>
      )}
    </section>
  );
}
