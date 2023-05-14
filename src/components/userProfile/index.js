import React, { useState, useEffect } from 'react';
import Styles from './styles.module.css';
import Button from '../Button'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import RestaurantCard from '../RestaurantCard';

const UserProfile = ({fullName="", emailAddress="", phoneNumber="", profilePicture="", coins=0, cardNumber="1234-1234-1234-1234"}) => {
    const [email, setEmail] = useState(emailAddress);
    const [phoneNum, setPhoneNum] = useState(phoneNumber);
    const [profilePic, setProfilePic] = useState(profilePicture);
    const [specialCoins, setSpecialCoins] = useState(coins);
    const [paymentDetails, setPaymentDetails] = useState(cardNumber)

  const [originalEmail, setOriginalEmail] = useState('');
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState('');
  const [originalProfilePicture, setOriginalProfilePicture] = useState('');
  const [originalPaymentDetails, setOriginalPaymentDetails] = useState('');

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
        <Button text="מחיקת משתמש" overrides={{"background-color":"red"}} size="small" />
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
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
        
    </div>
  );
};
export default UserProfile;

