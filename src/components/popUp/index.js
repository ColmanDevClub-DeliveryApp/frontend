import React, {useState, useEffect } from 'react';
import Styles from './styles.module.css';
import IconButton from '../iconButton';
import Button from '../button'

const Popup = ({ isOpen, onClose, isNewUser, setNewUser}) => {

    const changeToSignIn = ()=>{
        if(isNewUser)
            setNewUser(false);
    }
    const changeToSignUp = ()=>{
        if(!isNewUser)
            setNewUser(true);
    }
    return(
        isOpen&&
        <div className={Styles.modal}>
            <div className={Styles.overLay} onClick={onClose}></div>
            <div className={Styles.modalContent}>
                <IconButton icon='x' onclick={onClose}/>
                <h2 className={Styles.title}>
                <Button text="הרשמה" type={`${isNewUser?"contained": "none"}`} onclick={changeToSignUp}/>
                <Button text="התחברות" type={`${isNewUser?"none": "contained"}`} onclick={changeToSignIn}/>

                </h2>
            </div>
        </div>



    )
  

}

export default Popup