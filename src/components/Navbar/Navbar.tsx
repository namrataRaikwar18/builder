import React from "react";
import "./Navbar.css";
import { AiOutlineStar, AiOutlineBell } from "react-icons/ai";

const Navbar = () => {
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
            <AiOutlineBell className="icon" />
            <button
              className="btn notificationBtn"
              data-testid="notificationBtn"
            >
              99
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Navbar };
