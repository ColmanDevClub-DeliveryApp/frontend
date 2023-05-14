import {React, useState} from 'react';
import Style from './styles.module.css';
import Button from "../Button/index.js";
import axios from 'axios';

const SignUpForm = () => {

  const [formDetails, setFormDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    phoneNum: ''
  });


  const handleSubmit = (e)=>{
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': localStorage.getItem('token')
    //   }
    // }
    e.preventDefault();
    axios.post('http://localhost:8080/signup/',{...formDetails, firstName: formDetails.fullName.split(' ')[0], lastName: formDetails.fullName.split(' ')[1]}).then((res)=>{
      console.log(res.data);
    })
  }

  const handleChange = (e) => {
    setFormDetails({...formDetails, [e.target.name]: e.target.value});
  }


  return (
    <div className={Style.SignUp}>
        <form className={Style.form}>
            <div className={Style.input_container}>
                <input className={Style["input"]} type={"text"} placeholder="שם מלא" name='fullName' onChange={handleChange}></input>
                <input className={Style["input"]} type={"email"} placeholder="אימייל" name='email' onChange={handleChange}></input>
                <input className={Style["input"]} type={"password"} placeholder="סיסמא" name='password' onChange={handleChange}></input>
                <input className={Style["input"]} type={"tel"} placeholder="טלפון" name='phoneNum' onChange={handleChange}></input>
            </div>
            <Button text="הרשמה" fullWidth onclick={handleSubmit}/>
        </form>
    </div>
  );
};

export default SignUpForm;