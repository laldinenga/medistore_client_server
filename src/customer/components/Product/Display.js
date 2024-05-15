import React, { useState, useEffect } from 'react';
import './css/component.css'; // Import your CSS file

const YourComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from your database
    fetchDataFromDatabase()
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchDataFromDatabase = async () => {
    // Example: Fetching data from an API
    const response = await fetch('http://locahost:8080/admin/showitems');
    const data = await response.json();
    return data;
  };

  return (
    <div className="container">
      <h1>Items from Database</h1>
      <ul>
        {items.map(item => (
          <li key={item.id} className="item">
            {/* Display your item properties */}
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Price:</strong> {item.price}</p>
            <p><strong>Expiry Date:</strong> {item.expirydate}</p>
            {/* Add more properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
