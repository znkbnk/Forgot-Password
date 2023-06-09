import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordConfirmation from './ResetPasswordConfirmation';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/forgot-password">Forgot Password</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/forgot-password">
            <ForgotPasswordForm />
          </Route>
          <Route path="/reset-confirmation">
            <ResetPasswordConfirmation />
          </Route>
          <Route path="/">
            <h1>Welcome to the Home Page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
