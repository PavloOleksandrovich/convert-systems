import React from 'react';
import { NavLink } from 'react-router-dom'

import Convert from './Convert/Convert';
import Operation from './Operation/Operation';

function Home({system, table}) {
  return (
    <>
      <NavLink className="btn btn-danger" to="/table" style={{margin: '20px 0'}}>
        Symbols
      </NavLink>

      <Convert system={system} table={table} />

      <div style={{marginBottom: '50px'}}></div>

      <Operation system={system} table={table} />
    </>
  );
}

export default Home;
