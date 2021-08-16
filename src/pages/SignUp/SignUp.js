import React, { useContext } from "react";
import "./styles.css";
import { AuthContext } from "../../contexts/auth";
import { useHistory } from "react-router-dom";
import ButtonWithLoading from "../../components/ButtonWithLoading/ButtonWithLoading";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={signUp}>
        <div className="introduction">
          <p>Welcome</p>
          <h2>Create an account</h2>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="email-input">
            Email
          </label>
          <input
            className="form-field__input"
            id="email-input"
            type="email"
            placeholder="Email Address"
            tabIndex="0"
            name="email"
          ></input>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="email-input">
            Senha
          </label>
          <input
            className="form-field__input"
            id="password-input"
            type="password"
            placeholder="Senha"
            tabIndex="1"
            name="password"
          ></input>
        </div>
        <ButtonWithLoading label="Criar Conta"></ButtonWithLoading>
      </form>
    </div>
  );
}
