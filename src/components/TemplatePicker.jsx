import React from 'react';

export default function TemplatePicker({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    { id: 'modern', name: 'Modern Minimal', color: '#3b82f6' },
    { id: 'classic', name: 'Classic Professional', color: '#475569' },
    { id: 'creative', name: 'Creative Bold', color: '#8b5cf6' }
  ];

  return (
    <div className="template-picker-section">
      <h3>Choose a Template</h3>
      <div className="templates-grid">
        {templates.map(template => (
          <div 
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => setSelectedTemplate(template.id)}
            style={{ borderTopColor: template.color }}
          >
            <div className="template-preview"></div>
            <h4>{template.name}</h4>
            {selectedTemplate === template.id && (
              <div className="selected-indicator">✅ Selected</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
