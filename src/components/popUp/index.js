import React, { useState, useEffect } from "react";
import Styles from "./styles.module.css";
import IconButton from "../IconButton";
import Button from "../Button";
import SignIn from "../SignInForm";
import SignUp from "../SignUpForm";

const Popup = ({ isOpen, onClose, isNewUser, setNewUser }) => {
  return (
    isOpen && (
      <div className={Styles.modal}>
        <div className={Styles.overLay} onClick={onClose}></div>
        <div className={Styles.modalContent}>
          <IconButton icon="x" onclick={onClose} />

          <div className={Styles.title}>
            <Button
              text="הרשמה"
              type={`${isNewUser ? "contained" : "none"}`}
              onclick={() => setNewUser(true)}
            />
            <Button
              text="התחברות"
              type={`${isNewUser ? "none" : "contained"}`}
              onclick={() => setNewUser(false)}
            />
          </div>
          <div>{isNewUser ? <SignUp /> : <SignIn />}</div>
        </div>
      </div>
    )
  );
};
export default Popup;
