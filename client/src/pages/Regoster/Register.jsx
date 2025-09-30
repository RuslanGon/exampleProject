import React from 'react'
import css from './Register.module.css'

const Register = () => {
  return (
    <div className={css.container}>
        <form action="">
            <h1 className={css.title}>Welcome to PlasmAI</h1>
            <p className={css.text}>Sign in to access your personalized blood test <br /> analysis. Your data is secure and private</p>
        </form>

    </div>
  )
}

export default Register