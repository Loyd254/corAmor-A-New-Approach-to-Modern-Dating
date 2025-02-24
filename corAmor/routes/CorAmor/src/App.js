import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GiftList from './components/GiftList';
import PurchaseHistory from './components/PurchaseHistory';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={GiftList} />
          <Route path="/history" component={PurchaseHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;