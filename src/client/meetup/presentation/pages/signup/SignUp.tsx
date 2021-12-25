import React, { ChangeEvent, useState } from 'react';
// Comps
import { TextField } from '../../components/base/TextField';
import { Button } from '../../components/base/Button';
// Models
import { SignUpFormVM } from '../../view-models/sign-up-form.viewmodel';

import './SignUp.scss';

export function SignUp() {
  const [signUpForm, setSignUpForm] = useState(new SignUpFormVM());

  return (
    <main id="sign-up-container">
      <div className="form-wrapper">
        <form id="sign-up-form" style={{ marginBlockEnd: "0" }}>
          <TextField
            id="email-text-field"
            name="email"
            label="Email"
            value={signUpForm.email}
            onChange={onChange}
          />

          <TextField
            id="password-text-field"
            name="password"
            label="Password"
            value={signUpForm.password}
            hideText
            onChange={onChange}
          />

          <TextField
            id="password-check-text-field"
            name="passwordCheck"
            placeholder="Reenter password"
            value={signUpForm.passwordCheck}
            hideText
            onChange={onChange}
          />

          <TextField
            id="display-name-text-field"
            name="displayName"
            label="Display Name"
            value={signUpForm.displayName}
            onChange={onChange}
          />

          <Button className="btn-primary btn-lg btn-block" onClick={submitForm}>
            Register
          </Button>
        </form>
      </div>
    </main>
  );

  function onChange(event: ChangeEvent<HTMLInputElement>): void {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  }

  function submitForm(): void {
    console.log(signUpForm);
  }
}

