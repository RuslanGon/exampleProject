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


// import React, { useState, ChangeEvent, FormEvent } from "react";
// import styled from "styled-components";
// import google from "../../../public/google.svg";
// import facebook from "../../../public/face.svg";
// import link from "../../../public/link.svg";

// const Container = styled.div`
//   width: 628px;
//   border-radius: 20px;
//   border: 1px solid #E0E0E0;
//   background: #fff;
//   display: flex;
//   padding: 70px 109px;
//   justify-content: center;
// `;

// const Form = styled.form`
//   display: flex;
//   width: 410px;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h1`
//   color: #000;
//   text-align: center;
//   font-family: Inter;
//   font-size: 24px;
//   font-weight: 700;
//   line-height: 133.4%;
//   margin-bottom: 22px;
// `;

// const Text = styled.p`
//   text-align: center;
//   font-family: Inter;
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 24px;
//   margin-bottom: 56px;
// `;

// const Button = styled.button<{ bg?: string }>`
//   display: flex;
//   padding: 8px 22px;
//   background-color: ${(props) => props.bg || "transparent"};
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   border: 1px solid #E0E0E0;
//   gap: 9px;
//   margin-bottom: 12px;
//   color: #fff;
//   cursor: pointer;
// `;

// const Logo = styled.img`
//   width: 20px;
//   height: 20px;
// `;

// const DivOr = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   margin-bottom: 12px;
// `;

// const Hr = styled.hr`
//   width: 184px;
// `;

// const Span = styled.span`
//   color: rgba(0, 0, 0, 0.6);
//   font-family: Inter;
//   font-size: 14px;
//   font-weight: 400;
// `;

// const Field = styled.label`
//   position: relative;
//   display: block;
//   width: 100%;
// `;

// const LabelText = styled.span`
//   position: absolute;
//   top: -10px;
//   left: 12px;
//   background: #fff;
//   padding: 0 4px;
//   font-size: 14px;
//   color: rgba(0, 0, 0, 0.87);
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px 16px;
//   border-radius: 12px;
//   border: 1px solid #E0E0E0; /* рамка всегда серая */
//   background-color: transparent;
//   box-sizing: border-box;
//   font-size: 16px;
//   margin-bottom: 12px;
// `;

// const Error = styled.span`
//   display: block;
//   font-size: 13px;
//   color: red; /* только текст ошибки красный */
//   margin-bottom: 12px;
// `;

// const Btn1 = styled(Button)`
//   background-color: #000;
// `;

// const Text1 = styled.p`
//   color: #161010;
//   text-align: center;
//   font-family: Inter;
//   font-size: 14px;
//   font-weight: 500;
//   line-height: 157%;
// `;

// const Register: React.FC = () => {
//   const [email, setEmail] = useState<string>("");
//   const [error, setError] = useState<string>("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setEmail(value);

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (value && !emailRegex.test(value)) {
//       setError("Email is incorrect. Please enter valid email");
//     } else {
//       setError("");
//     }
//   };

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!error && email) {
//       // Здесь можно вызывать API
//       console.log("Отправка email:", email);
//     }
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Title>Welcome to PlasmAI</Title>
//         <Text>
//           Sign in to access your personalized blood test <br /> analysis. Your
//           data is secure and private
//         </Text>

//         <Button type="button">
//           <Logo src={google} alt="google" />
//           Sign in with Google
//         </Button>
//         <Button type="button">
//           <Logo src={facebook} alt="facebook" />
//           Sign in with Facebook
//         </Button>
//         <Button type="button">
//           <Logo src={link} alt="linkedin" />
//           Sign in with Linkedin
//         </Button>

//         <DivOr>
//           <Hr />
//           <Span>Or</Span>
//           <Hr />
//         </DivOr>

//         <Field>
//           <LabelText>Email</LabelText>
//           <Input
//             type="text"
//             placeholder="john.brown@gmail.com"
//             value={email}
//             onChange={handleChange}
//           />
//         </Field>
//         {error && <Error>{error}</Error>}

//         <Btn1 type="submit">Sign in</Btn1>

//         <Text1>
//           By continuing you agree to system Privacy Policy and Terms&Conditions
//         </Text1>
//       </Form>
//     </Container>
//   );
// };

// export default Register;
