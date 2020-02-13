import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Table } from './pages';
import { useTable } from './utils';

function App() {
  const [system] = useState(1000);
  const table = useTable(system);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route 
            exact 
            path="/" 
            render={() => <Home system={system} table={table} />} 
          />
          <Route 
            exact 
            path="/table" 
            render={() => <Table table={table} />} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
