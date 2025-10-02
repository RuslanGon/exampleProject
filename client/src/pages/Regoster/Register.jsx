import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode"; 
import css from "./Register.module.css";
import google from "../../assets/google.svg";
import facebook from "../../assets/face.svg";
import link from "../../assets/link.svg";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState(""); // для сообщения о ссылке

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!error && email) {
      try {
        const res = await fetch("http://localhost:5000/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Server error");
        }

        const data = await res.json();
        console.log("JWT от бекенда:", data);

        if (data.access_token) {
          // Если сразу авторизуем после верификации
          localStorage.setItem("token", data.access_token);
          navigate("/main");
        } else {
          // Если нужно кликнуть по ссылке из email
          setInfo("Ссылка для входа отправлена на ваш email. Проверьте почту.");
        }

      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = jwt_decode.default(token); 
    console.log("Google user:", decoded);

    try {
      const res = await fetch("http://localhost:5000/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const data = await res.json();
      console.log("JWT от бекенда:", data);
      localStorage.setItem("token", data.access_token);
      navigate("/main");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleError = () => {
    console.log("Google Login Failed");
  };

  const onClickGoogle = () => console.log("Регистрация по Google:");
  const onClickFacebook = () => console.log("Регистрация по Facebook:");
  const onClickLink = () => console.log("Регистрация по Linkedin:");

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
        {info && <span style={{ color: "green" }}>{info}</span>}

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
