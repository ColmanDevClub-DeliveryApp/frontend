import React from 'react';
import Style from './styles.module.css';
import Button from "../button";
import Input from "../Input"


const SignUp = () => {
  return (
    <div className={Style.SignUp}>
        <form className={Style.form}>
            <div className={Style.input_container}>
              <Input type="text" placeholder="שם מלא"/>
              <Input type="email" placeholder="אימייל"/>
              <Input type="password" placeholder="סיסמא"/>
              <Input type="text" placeholder="טלפון"/>
            </div>
            <Button text="הרשמה" fullWidth/>
        </form>
    </div>
  );
};

export default SignUp;