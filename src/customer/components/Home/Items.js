import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/MyComponent.css'; 

const MyComponent = () => {
  const [formData, setFormData] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch form data from endpoint 1
    axios.get('http://localhost:8080/admin/showitems')
      .then(response => {
        setFormData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching form data:', error);
      });

    // Fetch image data from endpoint 2
    axios.get(`http://localhost:8080/image/imageupload/${fileName}`)
      .then(response => {
        setImageData(response.data);
      })
      .catch(error => {
        console.error('Error fetching image data:', error);
      });

    // After both requests are completed, set isLoading to false
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Manufacturer</th>
            <th>Manufacturing Date</th>
            <th>Expiry Date</th>
            <th>Category</th>
            <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over the form data to render rows */}
            {formData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.manufacturer}</td>
                <td>{item.manufacturingdate}</td>
                <td>{item.expirydate}</td>
                <td>{item.category}</td>
              </tr>
            ))}
            {/* Map over the image data to render rows */}
            {imageData.map((item, index) => (
              <tr key={index}>
                <td><img src={item.name} alt="Image" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyComponent;
