import React from 'react';

const NAV_ITEMS = [
  { id: 'jobs', label: 'Job Search' },
  { id: 'preferences', label: 'Preferences' },
  { id: 'resume', label: 'Resume Tools' },
];

export default function Navbar({ currentView, setCurrentView }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>JobFind</h1>
      </div>
      <div className="navbar-links">
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={currentView === item.id ? 'nav-link active' : 'nav-link'}
            onClick={() => setCurrentView(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
