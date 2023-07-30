import React, { useState } from "react";
import Style from "./styles.module.css";
import { MdLocationOn } from "react-icons/md";
import Button from "../Button";
import { Link } from "react-router-dom";
import Popup from "../popUp/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const isLoggedIn = localStorage.getItem("user");
  const navigate = useNavigate();

  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  const handleLogOut = async () => {
    localStorage.removeItem("user");
    setPopupVisible(false);
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <div className={Style.navbar_container}>
      <ul className={Style.navbar_ul}>
        <li className={`${Style.li_logo}`}>
          <Link to="/">
            <div className={Style.logo_wrapper}>
              <svg
                width="74"
                height="29"
                viewBox="0 0 74 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5448 3.5H3.5448C-2.0552 23.9 2.87814 28.3333 6.0448 28C9.2448 28 12.7115 20 14.0448 16C14.4448 25.2 19.5448 27.8333 22.0448 28C29.2448 24 30.7115 9 30.5448 2H25.0448C25.2115 8.83333 24.8448 22.8 22.0448 24C19.2448 25.2 19.2115 12.1667 19.5448 5.5H15.0448C13.2115 11.5 9.0448 23.3 7.0448 22.5C5.0448 21.7 7.21147 9.5 8.5448 3.5Z"
                  fill="black"
                />
                <path
                  d="M46.5448 18.5C45.7448 24.1 40.2115 27.1667 37.5448 28C29.5448 28 30.5448 18.6667 32.0448 14C38.8448 4.8 44.5448 10.1667 46.5448 14L50.5448 13L52.0448 1L57.0448 2C57.8448 4.8 55.7115 12.8333 54.5448 16.5C54.1448 30.1 58.3781 21.8333 60.5448 16V13H58.0448V9.5H62.0448V4.5H68.0448V9.5H72.5448V13H65.5448V21.5C66.3448 27.1 68.5448 23.8333 69.5448 21.5L72.5448 22.5C66.1448 31.3 61.8781 26.5 60.5448 23C60.1448 26.6 56.0448 27.8333 54.0448 28C48.4448 28.8 48.7115 20.3333 49.5448 16L46.5448 18.5Z"
                  fill="black"
                />
                <path
                  d="M8.5448 3.5H3.5448C-2.0552 23.9 2.87814 28.3333 6.0448 28C9.2448 28 12.7115 20 14.0448 16C14.4448 25.2 19.5448 27.8333 22.0448 28C29.2448 24 30.7115 9 30.5448 2H25.0448C25.2115 8.83333 24.8448 22.8 22.0448 24C19.2448 25.2 19.2115 12.1667 19.5448 5.5H15.0448C13.2115 11.5 9.0448 23.3 7.0448 22.5C5.0448 21.7 7.21147 9.5 8.5448 3.5Z"
                  stroke="black"
                />
                <path
                  d="M46.5448 18.5C45.7448 24.1 40.2115 27.1667 37.5448 28C29.5448 28 30.5448 18.6667 32.0448 14C38.8448 4.8 44.5448 10.1667 46.5448 14L50.5448 13L52.0448 1L57.0448 2C57.8448 4.8 55.7115 12.8333 54.5448 16.5C54.1448 30.1 58.3781 21.8333 60.5448 16V13H58.0448V9.5H62.0448V4.5H68.0448V9.5H72.5448V13H65.5448V21.5C66.3448 27.1 68.5448 23.8333 69.5448 21.5L72.5448 22.5C66.1448 31.3 61.8781 26.5 60.5448 23C60.1448 26.6 56.0448 27.8333 54.0448 28C48.4448 28.8 48.7115 20.3333 49.5448 16L46.5448 18.5Z"
                  stroke="black"
                />
                <ellipse cx="38.5" cy="18.5" rx="3.5" ry="4.5" fill="white" />
              </svg>
            </div>
          </Link>
          <div className={Style.location}>
            <div className={Style.location_icon}>
              <MdLocationOn size={40} color="#309CD9" />
            </div>

            <p>
              <span>לשלוח אל</span>
              <span>המיקום שלך: {`${user ? user.address.city : "____"}`}</span>
            </p>
          </div>
        </li>
        <li className={`${Style.li} ${Style.li_input}`}>
          <input
            className={Style.navbar_input}
            type="text"
            placeholder="חיפוש מסעדה"
          ></input>
        </li>
        <li className={`${Style.li} ${Style.li_btns}`}>
          {isLoggedIn ? (
            <>
              <Button text="התנתק" type="none" onclick={handleLogOut} />
              <Button text="פרופיל" type="none" onclick={handleProfile} />
            </>
          ) : (
            <>
              <Popup
                isOpen={popupVisible}
                onClose={togglePopup}
                isNewUser={newUser}
                setNewUser={setNewUser}
              />
              <Button
                text="התחבר"
                onclick={() => {
                  setNewUser(false);
                  togglePopup();
                }}
              />
              <Button
                text="הירשם"
                onclick={() => {
                  setNewUser(true);
                  togglePopup();
                }}
              />
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
