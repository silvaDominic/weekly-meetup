import React from 'react';
// Components
import { Routes, Route, Link } from 'react-router-dom';
import { SignUp } from './pages/signup/SignUp';
import { LandingPage } from './pages/landing-page/LandingPage';

import { UserRepository } from '../infrastructure/user.repository';
import { AuthService } from '../application/services/auth.service';
import { ROUTE_SIGNUP, ROUTE_LOGIN, ROUTE_HOME, ROUTE_ROOT } from '../../../libs/constants/routes.const';
import './App.css';
import { Login } from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <div>
        <ul>
          <li>
            <Link to={ROUTE_HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTE_SIGNUP}>Signup</Link>
          </li>
          <li>
            <Link to={ROUTE_LOGIN}>Login</Link>
          </li>
        </ul>

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Routes>
          <Route path={ROUTE_HOME} element={<LandingPage />} />
          <Route path={ROUTE_SIGNUP} element={<SignUp userRepository={UserRepository} />} />
          <Route path={ROUTE_LOGIN} element={<Login authService={AuthService} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
