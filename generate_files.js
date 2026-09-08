const fs = require('fs');

const mockData = `export const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Seattle, WA",
    description: "We are looking for a skilled Frontend Developer with experience in React and modern CSS."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataCloud Inc",
    location: "New York, NY",
    description: "Join our backend team to build scalable microservices using Node.js and PostgreSQL."
  }
];

export const uniqueLocations = [...new Set(mockJobs.map(job => job.location))].sort();
`;
fs.writeFileSync('src/data/mockData.js', mockData);

const navbar = `import React from 'react';
export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><h1>JobFind</h1></div>
      <div className="navbar-links">
        <button className={currentView === 'jobs' ? 'active' : ''} onClick={() => setCurrentView('jobs')}>Job Search</button>
        <button className={currentView === 'resume' ? 'active' : ''} onClick={() => setCurrentView('resume')}>Resume Tools</button>
      </div>
    </nav>
  );
}`;
fs.writeFileSync('src/components/Navbar.jsx', navbar);

const searchBar = `import React from 'react';
export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-input" placeholder="Search jobs by title, company, or keywords..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  );
}`;
fs.writeFileSync('src/components/SearchBar.jsx', searchBar);
