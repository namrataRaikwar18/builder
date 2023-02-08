import React, {useState} from "react";
import "./Navbar.css";
import { AiOutlineStar, AiOutlineBell } from "react-icons/ai";
import {NotificationBar} from '../NotificationBar/NotificationBar';

const Navbar = () => {

  const [notificationBar, setnotificationBar] = useState<boolean>(false)

  return (
    <main className="navbarMain greyText">
      <div className="navbarDiv">
        <p className="headingStart">
          Buildcards / CarShip.app
          <AiOutlineStar className="outlineStar icon" />
        </p>
        <div className="avatarNotification">
          <p className="navAvatar">A</p>
          <div className="notificationDiv">
            <AiOutlineBell className="icon"  onClick={() => setnotificationBar(!notificationBar)} />
            <button
              className="btn notificationBtn"
              data-testid="notificationBtn"
              onClick={() => setnotificationBar(!notificationBar)}
            >
              99
            </button>
          </div>
        </div>
      </div>
      {notificationBar ? <NotificationBar  notificationBar={notificationBar} setnotificationBar={setnotificationBar}/> : null} 
    </main>
  );
};

export { Navbar };
