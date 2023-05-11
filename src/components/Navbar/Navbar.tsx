import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineStar} from "react-icons/ai";
import { NotificationBar } from "../NotificationBar/NotificationBar";
import { projectData } from "../../pages/Home/Home";
import { useParams } from "react-router";

const Navbar = () => {
  const [notificationBar, setnotificationBar] = useState<boolean>(false);
  const { projectId } = useParams();
  const singleProject = projectData.find(({ id }) => id === projectId);

  return (
    <main className="navbarMain greyText">
      <div className="navbarDiv">
        <p className="headingStart" data-testid="buildCardProject">
          Buildcards / {singleProject?.description}
          <AiOutlineStar className="outlineStar icon" />
        </p>
        {/* <div className="avatarNotification">
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
        </div> */}
      </div>
      {notificationBar ? (
        <NotificationBar
          notificationBar={notificationBar}
          setnotificationBar={setnotificationBar}
        />
      ) : null}
    </main>
  );
};

export { Navbar };
