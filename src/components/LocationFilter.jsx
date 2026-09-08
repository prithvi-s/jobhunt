import React from 'react';
import { uniqueLocations } from './mockData';

export default function LocationFilter({ locationFilter, setLocationFilter }) {
  return (
    <div className="location-filter-container">
      <select 
        className="location-select"
        value={locationFilter} 
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="">All Locations</option>
        {uniqueLocations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
    </div>
  );
}
