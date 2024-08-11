import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // Make sure this path is correct

function SchoolSelection() {
  const [selectedSchool, setSelectedSchool] = useState('');
  const [schools, setSchools] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8001/api/schools')
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
      })
      .catch((error) => {
        console.error('Error fetching schools:', error);
      });
  }, []);

  const handleSelection = (e) => {
    setSelectedSchool(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedSchool) {
      navigate('/login');
    }
  };

  return (
    <div className="school-selection">
      <h2>Select Your School</h2>
      <select value={selectedSchool} onChange={handleSelection}>
        <option value="">Select a school</option>
        {schools.map((school) => (
          <option key={school.id} value={school.name}>
            {school.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit} disabled={!selectedSchool}>
        Proceed to Login
      </button>
    </div>
  );
}

export default SchoolSelection;
