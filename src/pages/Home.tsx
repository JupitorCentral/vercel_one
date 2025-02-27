import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/first-service">
        <button>Go to First Service</button>
      </Link>
    </div>
  );
};

export default Home; 