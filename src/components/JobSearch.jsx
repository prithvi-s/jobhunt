import React, { useState } from 'react';
import SearchBar from './SearchBar';
import LocationFilter from './LocationFilter';
import JobList from './JobList';
import JobDetail from './JobDetail';
import MatchedJobs from './MatchedJobs';
import useJobFilters from '../hooks/useJobFilters';
import { mockJobs } from '../data/mockData';

// Composes the job search page: matched-jobs preview, filters, results, and
// the selected-job detail view. Filter logic lives in useJobFilters.
export default function JobSearch({ profile, hasProfile, onEditProfile }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const filters = useJobFilters(mockJobs);

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="job-search-view">
      {hasProfile && (
        <MatchedJobs
          jobs={mockJobs}
          profile={profile}
          onSelectJob={setSelectedJob}
          onUseProfile={() => filters.applyProfile(profile)}
          onEditProfile={onEditProfile}
        />
      )}

      <div className="filters-section">
        <SearchBar searchTerm={filters.searchTerm} setSearchTerm={filters.setSearchTerm} />
        <LocationFilter locationFilter={filters.locationFilter} setLocationFilter={filters.setLocationFilter} />
      </div>
      <JobList jobs={filters.filteredJobs} onSelectJob={setSelectedJob} />
    </div>
  );
}
