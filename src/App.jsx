import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobSearch from './components/JobSearch';
import ResumeSection from './components/ResumeSection';

function App() {
  const [currentView, setCurrentView] = useState('jobs');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="main-content">
        {currentView === 'jobs' && <JobSearch />}
        {currentView === 'resume' && (
          <ResumeSection 
            selectedTemplate={selectedTemplate} 
            setSelectedTemplate={setSelectedTemplate} 
          />
        )}
      </main>
    </div>
  );
}

export default App;
