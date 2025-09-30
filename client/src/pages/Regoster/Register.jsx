import React from 'react'
import css from './Register.module.css'
import google from '../../../public/google.svg'
import facebook from '../../../public/face.svg'
import link from '../../../public/link.svg'

const Register = () => {
  return (
    <div className={css.container}>
        <form className={css.form} action="">
            <h1 className={css.title}>Welcome to PlasmAI</h1>
            <p className={css.text}>Sign in to access your personalized blood test <br /> analysis. Your data is secure and private</p>
            <button><img src={google}  alt="" />Sign in with Google</button>
            <button><img src={facebook} alt="" />Sign in with Facebook</button>
            <button><img src={link} alt="" />Sign in with Linkedin</button>
        </form>

    </div>
  )
}

export default Register