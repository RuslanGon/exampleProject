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
            <button className={css.btn}><img className={css.logo} src={google}  alt="" />Sign in with Google</button>
            <button className={css.btn}><img className={css.logo} src={facebook} alt="" />Sign in with Facebook</button>
            <button className={css.btn}><img className={css.logo} src={link} alt="" />Sign in with Linkedin</button>
            <div className={css.div_or}>
                <hr className={css.hr} />
                <span className={css.span}>Or</span>
                <hr className={css.hr} />
            </div>
            <label className={css.lable} htmlFor="email">Email
            <input className={css.input} id="email" type="text" name="email" />
            </label>
           
        </form>

    </div>
  )
}

export default Register