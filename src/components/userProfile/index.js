// import React from 'react';
// import Styles from './styles.module.css'

// const UserProfile = ({fullName="", numOfCoins=0, phoneNumber="", email="", profilePic=""}) =>{
//     return(
//         <div>
//             <h1 className={Styles.h1}>פרופיל</h1>
//             <div className={Styles.details}>
                
//                     <h3 className={Styles.h3}>{fullName}</h3>
//                 <div className={Styles.detailsContainer}>
//                     <div className={Styles.mail}>
//                         <span className={`${Styles.bold} ${Styles.title}`}>אימייל</span>
//                         <span className={Styles.content}>{email}</span>
//                     </div>
//                     <div className={Styles.phone}>
//                         <span className={`${Styles.bold} ${Styles.title}`}>מספר טלפון</span>
//                         <span className={Styles.content}>{phoneNumber}</span>
//                     </div>
//                 </div>
//             </div>
            

//         </div>
//     );
// };

// export default UserProfile;


///WORKS!!

import React, { useState, useEffect } from 'react';
import Styles from './styles.module.css';
import Button from '../button'
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import RestaurantCard from '../RestaurantCard';

const UserProfile = ({fullName="Yuval", emailAddress="dasf", phoneNumber="0546657709", profilePicture="", coins=0}) => {
    const [email, setEmail] = useState(emailAddress);
    const [phoneNum, setPhoneNum] = useState(phoneNumber);
    const [profilePic, setProfilePic] = useState(profilePicture);
    const [specialCoins, setSpecialCoins] = useState(coins);

  const [originalEmail, setOriginalEmail] = useState('');
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState('');
  const [originalProfilePicture, setOriginalProfilePicture] = useState('');

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setOriginalEmail(email);
    setOriginalProfilePicture(profilePic);
    setOriginalPhoneNumber(phoneNum);
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

  const handleEditClick = () => {
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNum);
    setOriginalProfilePicture(profilePic);
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEmail(originalEmail);
    setPhoneNum(originalPhoneNumber);
    setProfilePic(originalProfilePicture);
    setEditing(false);
  };

  const handleSaveClick = () => {
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNum);
    setOriginalProfilePicture(profilePic);
    setEditing(false);
  };

  return (
    <div className={Styles.user_profile}>
      <h1>פרופיל</h1>

        <div className={Styles.profile_info_item}>
            <div className={Styles.name}><h2>{fullName}</h2></div>
        </div>

        <div className={Styles.profile_info_container}>
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
        <Button text="עריכה" onclick={handleEditClick}/>
      )}

        <div className={Styles.specialCoins}>
            <FontAwesomeIcon icon={faCoins} />
            <span className={Styles.coinsIcon}>Special Coins: {specialCoins}</span>
        </div>

        <h1>מקומות שאהבת</h1>
        <div className={Styles.restaurants}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
        

    </div>
  );
};

export default UserProfile;

