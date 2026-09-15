import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobSearch from './components/JobSearch';
import ResumeSection from './components/ResumeSection';
import JobPreferences from './components/JobPreferences';
import useProfile from './hooks/useProfile';

function App() {
  const [currentView, setCurrentView] = useState('jobs');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const { profile, hasProfile, saveProfile, clearProfile } = useProfile();

  return (
    <div className="app-container">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="main-content">
        {currentView === 'jobs' && (
          <JobSearch
            profile={profile}
            hasProfile={hasProfile}
            onEditProfile={() => setCurrentView('preferences')}
          />
        )}
        {currentView === 'preferences' && (
          <JobPreferences
            profile={profile}
            onSave={saveProfile}
            onClear={clearProfile}
          />
        )}
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
