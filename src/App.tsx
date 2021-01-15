import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from './components/pages/LoginPage';

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={LoginPage} />
        {/* Private Routes */}
        {/* Fallback redirect to main app homepage! Change the 'to' property after setting up routes. */}
        <Route path="/" component={() => <Redirect to="/homepage" />} />
      </Switch>
    </div>
  );
};

export default App;
