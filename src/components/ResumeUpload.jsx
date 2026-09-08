import React, { useState } from 'react';

export default function ResumeUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files[0];
    
    if (!file) return;

    // Check extension
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const validExtensions = ['.pdf', '.docx'];
    
    const isValidType = validTypes.includes(file.type) || 
      validExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!isValidType) {
      setError('Invalid file type. Please upload a .pdf or .docx file.');
      setUploadedFile(null);
      return;
    }

    setUploadedFile(file);
  };

  return (
    <div className="resume-upload-section">
      <h3>Upload Existing Resume</h3>
      <div className="upload-container">
        <input 
          type="file" 
          id="resume-upload" 
          accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
          onChange={handleFileChange} 
          className="file-input"
        />
        <label htmlFor="resume-upload" className="upload-button">
          Choose File
        </label>
      </div>

      {error && <div className="error-message">❌ {error}</div>}
      
      {uploadedFile && (
        <div className="success-message">
          ✅ Resume uploaded: {uploadedFile.name}
        </div>
      )}
    </div>
  );
}
