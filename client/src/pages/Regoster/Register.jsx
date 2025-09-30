import React, { useState } from "react";
import css from "./Register.module.css";
import google from "../../../public/google.svg";
import facebook from "../../../public/face.svg";
import link from "../../../public/link.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Простая проверка email через RegExp
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setError("Email is incorrect. Please enter valid email");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && email) {
      // TODO: вызвать API для логина
      console.log("Отправка email:", email);
    }
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.title}>Welcome to PlasmAI</h1>
        <p className={css.text}>
          Sign in to access your personalized blood test <br /> analysis. Your
          data is secure and private
        </p>

        <button type="button" className={css.btn}>
          <img className={css.logo} src={google} alt="google" />
          Sign in with Google
        </button>
        <button type="button" className={css.btn}>
          <img className={css.logo} src={facebook} alt="facebook" />
          Sign in with Facebook
        </button>
        <button type="button" className={css.btn}>
          <img className={css.logo} src={link} alt="link" />
          Sign in with Linkedin
        </button>

        <div className={css.div_or}>
          <hr className={css.hr} />
          <span className={css.span}>Or</span>
          <hr className={css.hr} />
        </div>

        <label className={css.field}>
          <span className={css.labelText}>Email</span>
          <input
            className={`${css.input} ${error ? css.inputError : ""}`}
            id="email"
            type="text"
            name="email"
            placeholder="john.brown@gmail.com"
            value={email}
            onChange={handleChange}
          />
        </label>
        {error && <span className={css.error}>{error}</span>}
        <button type="submit" className={css.btn1}>Sign in</button>
        <p className={css.text1}>
          By continuing you agree to system Privacy Policy and Terms&Conditions
        </p>
      </form>
    </div>
  );
};

export default Register;
