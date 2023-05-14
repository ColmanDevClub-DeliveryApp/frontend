import React, {useState} from "react";
import Button from "../Button";
import Styles from './styles.module.css'
import {FaGoogle} from 'react-icons/fa'
import axios from "axios";
const SignInForm = () =>{
    const [formDetails, setFormDetails] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormDetails({...formDetails, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:8080/signin/',{
            email: formDetails.email,
            password: formDetails.password
        }).then((res)=>{
            console.log(res.data);
            res.data ? localStorage.setItem('token', res.data) : console.log("no token");
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className={Styles.signIn}>
        <form className={Styles.form}>
            <div className={Styles.inputsContainer}>
                <input className={Styles.input} type="email" placeholder="אימייל" name="email" onChange={handleChange}></input>
                <input className={`${Styles.input} ${Styles.lastInput}`} type="password" placeholder="סיסמא" name="password" onChange={handleChange}></input>
                <div className={Styles.forgotPassword}>
                    <Button text="שכחתי את הסיסמא" size="small" type="none" fullWidth overrides={{"padding":"0"}}/>
                </div>
            </div>
            <Button text="התחבר" fullWidth onclick={handleSubmit}/>
        </form>
        <Button text="Continue with Google" fullWidth type="outlined">
        <FaGoogle className={Styles.google_icon}/>
        </Button>

        

        </div>
    );
}

export default SignInForm;