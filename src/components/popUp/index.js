import React, {useState, useEffect } from 'react';
import Styles from './styles.module.css';
import IconButton from '../iconButton';

const Popup = ({ isOpen, onClose, children }) => {


    return(
        isOpen&&
        <div className={Styles.modal}>
            <div className={Styles.overLay} onClick={onClose}></div>
            <div className={Styles.modalContent}>
                <IconButton icon='x' size="small" onclick={onClose} type="outlined"/>
                <h2>התחברות</h2>
            </div>
        </div>



    )
  

}

export default Popup