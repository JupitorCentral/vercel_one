import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const callApi = async () => {
    try {
      const response = await fetch('/api/hello');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiMessage(data.message);
    } catch (error) {
      console.error("Could not fetch API:", error);
      setApiMessage("Failed to load message from API");
    }
  };


  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/first-service">
        <button>Go to First Service</button>
      </Link>
      <button onClick={callApi}>Call API</button>
      {apiMessage && <p>{apiMessage}</p>}
    </div>
  );
};

export default Home; 