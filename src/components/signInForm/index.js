import React, { useState } from "react";
import Button from "../Button";
import Styles from "./styles.module.css";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
  const Navigate = useNavigate();
  const initialize = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialize);
  
  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };
  
  const handleSignIn = async (e) => {
    // post request with body
    
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8080/auth/login", data);
    
      if (response.status == 200) {
        localStorage.setItem("user", JSON.stringify(data.email));
        Navigate("/");
      }
    }catch(err){
      alert("wrong email or password");
    } 
  };

  return (
    <div className={Styles.signIn}>
      <form className={Styles.form}>
        <div className={Styles.inputsContainer}>
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            className={Styles.input}
            type="email"
            placeholder="אימייל"
          ></input>
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            className={`${Styles.input} ${Styles.lastInput}`}
            type="password"
            placeholder="סיסמא"
          ></input>
          <div className={Styles.forgotPassword}>
            <Button
              text="שכחתי את הסיסמא"
              size="small"
              type="none"
              fullWidth
              overrides={{ padding: "0" }}
            />
          </div>
        </div>
        <Button text="התחבר" fullWidth onclick={handleSignIn} />
      </form>
      <Button text="Continue with Google" fullWidth type="outlined">
        <FaGoogle className={Styles.google_icon} />
      </Button>
    </div>
  );
};

export default SignInForm;
