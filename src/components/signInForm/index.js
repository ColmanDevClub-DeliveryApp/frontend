import React, {useState} from "react";
import Button from "../button";
import Styles from './styles.module.css'
import {FaGoogle} from 'react-icons/fa'

const signInForm = () =>{

    return(
        <div className={Styles.signIn}>
        <form className={Styles.form}>
            <div className={Styles.inputsContainer}>
                <input className={Styles.input} type="email" placeholder="אימייל"></input>
                <input className={`${Styles.input} ${Styles.lastInput}`} type="password" placeholder="סיסמא"></input>
                <div className={Styles.forgotPassword}>
                    <Button text="שכחתי את הסיסמא" size="small" type="none" fullWidth overrides={{"padding":"0"}}/>
                </div>
            </div>
            <Button text="התחבר" fullWidth/>
        </form>
        <Button text="Continue with Google" fullWidth type="outlined">
        <FaGoogle className={Styles.google_icon}/>
        </Button>

        

        </div>
    );
}

export default signInForm;