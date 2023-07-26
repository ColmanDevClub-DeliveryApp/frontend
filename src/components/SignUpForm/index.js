import React, { useState } from "react";
import Style from "./styles.module.css";
import Button from "../Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const initialize = {
    name: "",
    email: "",
    password: "",
    phone: "",
  };
  const [data, setData] = useState(initialize);
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const handleSignUp = async (e) => {
    // post request with body
    const response = await axios.post(
      "http://localhost:8080/auth/register",
      data
    );
    if (response.status === 200) {
      navigate("/login");
      localStorage.setItem("user", JSON.stringify(response.data.email));
    }
  };

  return (
    <div className={Style.SignUp}>
      <form className={Style.form}>
        <div className={Style.input_container}>
          <input
            onChange={(e) => handleChange("name", e.target.value)}
            className={`${Style.input}`}
            type={"text"}
            placeholder={"שם מלא"}
          ></input>
          <input
            onChange={(e) => handleChange("email", e.target.value)}
            className={`${Style.input}`}
            type={"text"}
            placeholder={"אימייל"}
          ></input>
          <input
            onChange={(e) => handleChange("password", e.target.value)}
            className={`${Style.input}`}
            type={"password"}
            placeholder={"סיסמא"}
          ></input>
          <input
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`${Style.input}`}
            type={"text"}
            placeholder={"טלפון"}
          ></input>
        </div>
        <Button text="הרשמה" fullWidth onclick={handleSignUp} />
      </form>
    </div>
  );
};

export default SignUpForm;
