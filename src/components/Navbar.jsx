import React from 'react';

export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>JobFind</h1>
      </div>
      <div className="navbar-links">
        <button 
          className={currentView === 'jobs' ? 'nav-link active' : 'nav-link'} 
          onClick={() => setCurrentView('jobs')}
        >
          Job Search
        </button>
        <button 
          className={currentView === 'resume' ? 'nav-link active' : 'nav-link'} 
          onClick={() => setCurrentView('resume')}
        >
          Resume Tools
        </button>
      </div>
    </nav>
  );
}
