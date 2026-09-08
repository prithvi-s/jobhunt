import React from 'react';
import ResumeUpload from './ResumeUpload';
import TemplatePicker from './TemplatePicker';

export default function ResumeSection({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className="resume-section-view">
      <div className="resume-content">
        <h2>Resume Tools</h2>
        <p className="section-description">Upload your existing resume and pick a template to get started.</p>
        
        <div className="resume-grid">
          <ResumeUpload />
          <TemplatePicker 
            selectedTemplate={selectedTemplate} 
            setSelectedTemplate={setSelectedTemplate} 
          />
        </div>
      </div>
    </div>
  );
}
