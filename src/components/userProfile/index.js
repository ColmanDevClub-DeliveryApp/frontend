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

const UserProfile = () => {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [phoneNumber, setPhoneNumber] = useState('555-1234');
    const [profilePicture, setProfilePicture] = useState("");
    const [specialCoins, setSpecialCoins] = useState(0);

  const [originalName, setOriginalName] = useState('');
  const [originalEmail, setOriginalEmail] = useState('');
  const [originalPhoneNumber, setOriginalPhoneNumber] = useState('');
  const [originalProfilePicture, setOriginalProfilePicture] = useState('');

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    setOriginalName(name);
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNumber);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleProfilePictureChange = (event) =>{
    setProfilePicture(event.target.value)
  }

  const handleEditClick = () => {
    setOriginalName(name);
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNumber);
    setOriginalProfilePicture(profilePicture);
    setEditing(true);
  };

  const handleCancelClick = () => {
    setName(originalName);
    setEmail(originalEmail);
    setPhoneNumber(originalPhoneNumber);
    setProfilePicture(originalProfilePicture);
    setEditing(false);
  };

  const handleSaveClick = () => {
    setOriginalName(name);
    setOriginalEmail(email);
    setOriginalPhoneNumber(phoneNumber);
    setOriginalProfilePicture(profilePicture);
    setEditing(false);
  };

  return (
    <div className={Styles.user_profile}>
      <h1>פרופיל</h1>
      <div className={Styles.profile_info_container}>
        <div className={Styles.profile_info_item}>
          <div className={Styles.profile_info_label}>שם</div>
          {editing ? (
            <input
              className={Styles.edit_profile_input}
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          ) : (
            <div>{name}</div>
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
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          ) : (
            <div>{phoneNumber}</div>
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
            <span className={Styles.coins}>Special Coins: {specialCoins}</span>
        </div>

    </div>
  );
};

export default UserProfile;

