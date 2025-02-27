import React from 'react';
import { Link } from 'react-router-dom';

const FirstService: React.FC = () => {
  return (
    <div>
      <h1>This is First Service</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default FirstService; 