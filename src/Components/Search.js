import React, { useState } from 'react';
import './App.css';

// Sample JSON data
const jsonData = [
  {
    id: 1,
    image: "Image/artistic 5.jpg",
    title: "ABC",
    address: "THIS IS DUMMY DATA",
    Area: "Nana Mava",
    Redirect: ""
  },
  {
    id: 2,
    image: "Image/artistic 5.jpg",
    title: "ABC",
    address: "THIS IS DUMMY DATA",
    Area: "Nanavati",
    Redirect: ""
  },
  {
    id: 3,
    image: "Image/artistic 5.jpg",
    title: "ABC",
    address: "THIS IS DUMMY DATA",
    Area: "Ramapir chowkdi",
    Redirect: ""
  },
  {
    id: 4,
    image: "Image/artistic 5.jpg",
    title: "ABC",
    address: "THIS IS DUMMY DATA",
    Area: "Raiya chowkdi",
    Redirect: ""
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to filter data based on search input
  const filteredData = jsonData.filter(item => 
    item.Area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search by Area</h1>
      <input
        type="text"
        placeholder="Enter area name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div id="result">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <div key={item.id} className="result-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p><strong>Address:</strong> {item.address}</p>
              <p><strong>Area:</strong> {item.Area}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
