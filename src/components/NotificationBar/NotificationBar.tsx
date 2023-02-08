import React from "react";
import { BsCheck2All } from "react-icons/bs";

type NotificationBarType = {
  notificationBar: boolean;
  setnotificationBar: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotificationBar = ({
  notificationBar,
  setnotificationBar,
}: NotificationBarType) => {
  const date = new Date();

  return (
    <main
      className="notificationBarMain"
      onClick={() => setnotificationBar(false)}
    >
      <section className="notificationBar">
        <div className="notificationHeader">
          <h4>Notifications (355)</h4>
          <div className="filterDiv">
            <div>
              <select name="" id="" className="selectFilter greyText">
                <option value="" className="option">
                  All
                </option>
                <option value="" className="option">
                  Unread
                </option>
                <option value="" className="option">
                  Mentions
                </option>
              </select>
            </div>
            <span className="checkIcon">
              <BsCheck2All className="icon " />
            </span>
          </div>
        </div>
        <p className="divider"></p>
        <div className="notificationMessageBox">
          <span className="projectNameDate">
            <h4>CarShip.app</h4>
            <p>
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getDate()}
            </p>
          </span>
          <p className="notificationMessage">
            <small>
              BE: Search Filter Home Top Deals Filter Story details was modified
              by
            </small>
            <small className="developerName"> @System Admin</small>
          </p>
        </div>
      </section>
    </main>
  );
};

export { NotificationBar };
