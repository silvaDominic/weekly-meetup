import React, { ChangeEvent, useState } from 'react';
// Components
import { useNavigate } from 'react-router-dom';
import { TextField } from '../../components/base/TextField';

import { ROUTE_HOME } from '../../../../../libs/constants/routes.const';
import { ErrorAlert } from '../../modal-alert';
import { LoginFormVM } from '../../view-models/login-form.viewmodel';

import './Login.scss';
import { Button } from '../../components/base/Button';

export function Login({ authService }: { authService: any }) {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(new LoginFormVM());

  return (
    <main id="login-container" className="container">
      <div className="form-wrapper">
        <form id="login-form">
          <TextField
            id="email-text-field"
            name="email"
            label="Email"
            value={loginForm.email}
            onChange={onChange}
          />

          <TextField
            id="password-text-field"
            name="password"
            label="Password"
            value={loginForm.password}
            hideText
            onChange={onChange}
          />

          <Button className="btn-primary btn-lg btn-block" onClick={submitForm}>
            Login
          </Button>
        </form>
      </div>
    </main>
  );

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  }

  function submitForm(): void {
    authService.loginUser(loginForm.email, loginForm.password)
      .then((res: any) => {
        alert("User logged in successfully!");
        console.log(res);
        navigate(ROUTE_HOME);
      })
      .catch((err: any) => {
        console.error("Request failed: ", err);
        ErrorAlert();
      });
  }
}
