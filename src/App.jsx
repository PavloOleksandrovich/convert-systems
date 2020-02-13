import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Table } from './pages';

function App() {
  const [system] = useState(1000);

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Home system={system} />} />
          <Route exact path="/table" render={() => <Table system={system} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
