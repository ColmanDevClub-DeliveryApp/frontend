import React, { useState, useEffect, useContext } from 'react';
import Styles from './styles.module.css';
import Button from '../button'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import RestaurantCard from '../RestaurantCard';
import axios from 'axios';

const UserProfile = () => {

  //USE CONNEXT API TO GET USER INFO
  const user1 = {
    fullName: "Yuval Ofek",
    emailAddress: "123@123",
    phoneNumber: "054-12345678",
    profilePicture: "https://media.licdn.com/dms/image/C4D03AQGflMHai6AaJA/profile-displayphoto-shrink_800_800/0/1653454376749?e=1688601600&v=beta&t=rdoeeBDdW_aSEUhpXMSgXrjmavsOAi3vun2fJUhrzxo",
    coins: 20,
    cardNumber: "1234-5678-1234-5678",
    lastRestaurants: [
      {
        image: "https://picsum.photos/200",
        name: "restaurant name 3",
        description: "restaurant description 3",
        deliveryPrice: 10,
        deliveryTime: 10,
      },
      {
        image: "https://picsum.photos/200",
        name: "restaurant name 2",
        description: "restaurant description 2",
        deliveryPrice: 20,
        deliveryTime: 20,
      },
      {
        image: "https://picsum.photos/200",
        name: "restaurant name 1",
        description: "restaurant description 1",
        deliveryPrice: 30,
        deliveryTime: 30,
      },
    ]
  }
  
  const [user, setUser] = useState({user1});
  const [fullName, setFullName] = useState(user1.fullName);
  const [email, setEmail] = useState(user1.emailAddress);
  const [phoneNum, setPhoneNum] = useState(user1.phoneNumber);
  const [adress, setAdress] = useState(user1.adress);
  const [profilePic, setProfilePic] = useState(user1.profilePicture);
  const [specialCoins, setSpecialCoins] = useState(user1.coins);
  const [paymentDetails, setPaymentDetails] = useState(user1.cardNumber)
  const [lastRestaurants, setLastRestaurants] = useState(user1.lastRestaurants);

  console.log(fullName)
  const [originalEmail, setOriginalEmail] = useState('');
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState('');
  const [originalProfilePicture, setOriginalProfilePicture] = useState('');
  const [originalPaymentDetails, setOriginalPaymentDetails] = useState('');
  const [originalAdress, setOriginalAdress] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setOriginalEmail(email);
    setOriginalProfilePicture(profilePic);
    setOriginalPhoneNumber(phoneNum);
    setOriginalPaymentDetails(paymentDetails);
    setEditing(false);
  }, []);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNum(event.target.value);
  };

  const handleProfilePictureChange = (event) =>{
    setProfilePic(event.target.value)
  }

  const handlePaymentDetailsChange = (event) =>{
    setPaymentDetails(event.target.value)
  }

  const handleEditClick = () => {
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNum);
    setOriginalProfilePicture(profilePic);
    setOriginalPaymentDetails(paymentDetails);
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEmail(originalEmail);
    setPhoneNum(originalPhoneNumber);
    setProfilePic(originalProfilePicture);
    setPaymentDetails(originalPaymentDetails);
    setEditing(false);
  };

  const handleSaveClick = () => {
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNum);
    setOriginalProfilePicture(profilePic);
    setOriginalPaymentDetails(paymentDetails);
    setEditing(false);
  };

  return (
    <div className={Styles.user_profile}>
      <div className={Styles.topBar}>
        <Button text="מחיקת חשבון" overrides={{"background-color":"red"}} size="small" />
        <h1>פרופיל</h1>
      </div>

        <div className={Styles.profile_info_item}>
            <div className={Styles.name}><h2>{fullName}</h2></div>
        </div>

        <div className={Styles.profile_info_container}>
        <div className={Styles.profile_info_item}>
                <div className={Styles.profile_info_label}>פרטי אשראי</div>
                {editing ? (
                    <input
                        className={Styles.edit_profile_input}
                        type="text"
                        value={paymentDetails}
                        onChange={handlePaymentDetailsChange}
                    />
                ) : (
                <div>{paymentDetails}</div>
                )}
            </div>
            <div className={Styles.profile_info_item}>
                <div className={Styles.profile_info_label}>אימייל</div>
            {editing ? (
                <input
                    className={Styles.edit_profile_input}
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                />
            ) : (
                <div>{email}</div>
                )}
            </div>
            <div className={Styles.profile_info_item}>
                <div className={Styles.profile_info_label}>מספר טלפון</div>
                {editing ? (
                    <input
                        className={Styles.edit_profile_input}
                        type="text"
                        value={phoneNum}
                        onChange={handlePhoneNumberChange}
                    />
                ) : (
                <div>{phoneNum}</div>
                )}
            </div>
            <div className={Styles.profile_info_item}>
                <div className={`${Styles.profile_info_label} ${Styles.profileDiv}`}><img className={Styles.profilePic} src={profilePic} alt='profilePic'/></div>
                {editing ? (
                    <input
                        className={`${Styles.edit_profile_input} ${Styles.profilePicInput}`}
                        type="text"
                        value={profilePic}
                        onChange={handleProfilePictureChange}
                    />
                ) : (
                <div></div>
                )}
            </div>
        </div>
      {editing ? (
        <div className={Styles.saveCancelButtons}>
          <Button text="שמירה" onclick={handleSaveClick}/>
          <Button text="ביטול" onclick ={handleCancelClick}/>
        </div>
      ) : (
        <Button text="עריכה" onclick={handleEditClick} fullWidth/>
      )}

        <div className={Styles.specialCoins}>
            <FontAwesomeIcon icon={faCoins} />
            <span className={Styles.coinsIcon}>Special Coins: {specialCoins}</span>
        </div>

        <h1>הזמנות אחרונות</h1>
        <div className={Styles.restaurants}>
            <RestaurantCard restaurantItem={lastRestaurants[lastRestaurants.length-1]}/>
            <RestaurantCard restaurantItem={lastRestaurants[lastRestaurants.length-2]}/>
            <RestaurantCard restaurantItem={lastRestaurants[lastRestaurants.length-3]}/>
        </div>
        
    </div>
  );
};
export default UserProfile;

