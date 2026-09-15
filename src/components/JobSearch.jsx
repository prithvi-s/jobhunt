import React, { useState, useMemo } from 'react';
import SearchBar from './SearchBar';
import LocationFilter from './LocationFilter';
import JobList from './JobList';
import JobDetail from './JobDetail';
import { mockJobs } from '../data/mockData';

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
        
      const matchesLocation = locationFilter === '' || job.location === locationFilter;
      
      return matchesSearch && matchesLocation;
    });
  }, [searchTerm, locationFilter]);

  if (selectedJob) {
    return <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="job-search-view">
      <div className="filters-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <LocationFilter locationFilter={locationFilter} setLocationFilter={setLocationFilter} />
      </div>
      <JobList jobs={filteredJobs} onSelectJob={setSelectedJob} />
    </div>
  );
}
