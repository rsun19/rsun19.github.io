import React, { useEffect, useState, ChangeEvent } from 'react';
import testImg from '../.././assets/car-highway.jpeg';

const Model: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file || null);
  };

  const handlePredict = async () => {
    if (!image) {
      console.error('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      console.log(formData)
      const response = await fetch('https://www.recycleai.tech/api/car', {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Prediction result:', result);
    } catch (error) {
      console.error('Error making request:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handlePredict}>Predict</button>

    </div>
  );
};

export default Model;
