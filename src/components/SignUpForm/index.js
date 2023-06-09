import React from 'react';
import Style from './styles.module.css';
import Button from "../Button";


const SignUpForm = () => {
  return (
    <div className={Style.SignUp}>
        <form className={Style.form}>
            <div className={Style.input_container}>
                <input className={`${Style.input}`} type={"text"} placeholder={"שם מלא"}></input>
                <input className={`${Style.input}`} type={"text"} placeholder={"אימייל"}></input>
                <input className={`${Style.input}`} type={"password"} placeholder={"סיסמא"}></input>
                <input className={`${Style.input}`} type={"text"} placeholder={"טלפון"}></input>
            </div>
            <Button text="הרשמה" fullWidth/>
        </form>
    </div>
  );
};

export default SignUpForm;