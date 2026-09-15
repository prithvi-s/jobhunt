import { useState, useMemo } from 'react';

function matchesSearch(job, term) {
  if (term === '') return true;
  const t = term.toLowerCase();
  return (
    job.title.toLowerCase().includes(t) ||
    job.company.toLowerCase().includes(t) ||
    job.description.toLowerCase().includes(t)
  );
}

// Owns the search + location filter state and derives the filtered job list.
export default function useJobFilters(jobs) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const filteredJobs = useMemo(
    () => jobs.filter(job =>
      matchesSearch(job, searchTerm) &&
      (locationFilter === '' || job.location === locationFilter)
    ),
    [jobs, searchTerm, locationFilter]
  );

  // Fills the filters from a saved profile in one shot ("Use saved profile").
  const applyProfile = (profile) => {
    if (!profile) return;
    setSearchTerm(profile.keywords[0] || '');
    setLocationFilter(profile.preferredLocation || '');
  };

  return { searchTerm, setSearchTerm, locationFilter, setLocationFilter, filteredJobs, applyProfile };
}
