import React from 'react';
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <NavLink className="btn btn-danger" to="/table" style={{margin: '20px 0'}}>
      Symbols
    </NavLink>
  );
}

export default Home;
