// import React, { useState, ChangeEvent, FormEvent } from "react";
// import google from "../../../public/google.svg";
// import facebook from "../../../public/face.svg";
// import link from "../../../public/link.svg";
// import {
//   Container,
//   Form,
//   Title,
//   Text,
//   Button,
//   Logo,
//   DivOr,
//   Hr,
//   Span,
//   Field,
//   LabelText,
//   Input,
//   Error,
//   Btn1,
//   Text1,
// } from "./RegisterStyles";

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