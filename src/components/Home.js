import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to='/dashboard'>Dashboard</Link>
    </nav>
  );
}

export default Home;