// import React, { useState, ChangeEvent, FormEvent } from "react";
// import google from "../../assets/google.svg";
// import facebook from "../../assets/face.svg";
// import link from "../../assets/link.svg";
// import {
//   Container,
//   Form,
//   Title,
//   Text,
//   Button,
//   BtnSubmit,
//   Logo,
//   DivOr,
//   Hr,
//   Span,
//   Field,
//   LabelText,
//   Input,
//   Error,
//   Text1,
// } from "./RegisterStyles";

// const Register: React.FC = () => {
//     const [email, setEmail] = useState<string>("");
//     const [error, setError] = useState<string>("");
  
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//       const value = e.target.value;
//       setEmail(value);
  
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (value && !emailRegex.test(value)) {
//         setError("Email is incorrect. Please enter valid email");
//       } else {
//         setError("");
//       }
//     };
  
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//       e.preventDefault();
//       if (!error && email) {
//         console.log("Отправка email:", email);
//         // TODO: вызвать API для логина
//       }
//     };
  
//     const onClickGoogle = () => {
//       console.log("Регистрация по Google:");
//       // TODO: вызвать API для логина через Google
//     };
  
//     const onClickFacebook = () => {
//       console.log("Регистрация по Facebook:");
//       // TODO: вызвать API для логина через Facebook
//     };
  
//     const onClickLink = () => {
//       console.log("Регистрация по Linkedin:");
//       // TODO: вызвать API для логина через Linkedin
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <h1>Welcome to PlasmAI</h1>
//           <p>
//             Sign in to access your personalized blood test <br /> analysis. Your
//             data is secure and private
//           </p>
  
//           <button type="button" onClick={onClickGoogle}>
//             <img src={google} alt="google" />
//             Sign in with Google
//           </button>
//           <button type="button" onClick={onClickFacebook}>
//             <img src={facebook} alt="facebook" />
//             Sign in with Facebook
//           </button>
//           <button type="button" onClick={onClickLink}>
//             <img src={link} alt="linkedin" />
//             Sign in with Linkedin
//           </button>
  
//           <div>
//             <hr />
//             <span>Or</span>
//             <hr />
//           </div>
  
//           <label>
//             <span>Email</span>
//             <input
//               type="text"
//               placeholder="john.brown@gmail.com"
//               value={email}
//               onChange={handleChange}
//             />
//           </label>
//           {error && <span>{error}</span>}
  
//           <button
//             type="submit"
//             disabled={!email || !!error}
//             style={{
//               backgroundColor: !email || !!error ? "rgba(0,0,0,0.12)" : "#000",
//               color: !email || !!error ? "rgba(0,0,0,0.38)" : "#fff",
//               cursor: !email || !!error ? "not-allowed" : "pointer",
//             }}
//           >
//             Sign in
//           </button>
  
//           <p>
//             By continuing you agree to system Privacy Policy and Terms&Conditions
//           </p>
//         </form>
//       </div>
//     );
//   };
  
//   export default Register;
