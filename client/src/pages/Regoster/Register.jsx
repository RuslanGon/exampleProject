import React, { useState } from "react";
import css from "./Register.module.css";
import google from "../../assets/google.svg";
import facebook from "../../assets/face.svg";
import link from "../../assets/link.svg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

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

  const onClickGoogle = (e) => {

    // TODO: вызвать API для логина
    console.log("Регистрация по Google:");
  };

  const onClickFacebook = (e) => {

    // TODO: вызвать API для логина
    console.log("Регистрация по Facebook:");
  };

  const onClickLink = (e) => {

    // TODO: вызвать API для логина
    console.log("Регистрация по Link:");
  };



  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.title}>Welcome to PlasmAI</h1>
        <p className={css.text}>
          Sign in to access your personalized blood test <br /> analysis. Your
          data is secure and private
        </p>

        <button type="button" onClick={onClickGoogle} className={css.btn}>
          <img className={css.logo} src={google} alt="google" />
          Sign in with Google
        </button>
        <button type="button" onClick={onClickFacebook} className={css.btn}>
          <img className={css.logo} src={facebook} alt="facebook" />
          Sign in with Facebook
        </button>
        <button type="button" onClick={onClickLink} className={css.btn}>
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
        <button
          type="submit"
          className={css.btn1}
          disabled={!email || !!error}
          style={{
            backgroundColor: !email || !!error ? "rgba(0,0,0,0.12)" : "#000",
            color: !email || !!error ? "rgba(0,0,0,0.38)" : "#fff",
            cursor: !email || !!error ? "not-allowed" : "pointer",
          }}
        >
          Sign in
        </button>
        <p className={css.text1}>
          By continuing you agree to system Privacy Policy and Terms&Conditions
        </p>
      </form>
    </div>
  );
};

export default Register;
