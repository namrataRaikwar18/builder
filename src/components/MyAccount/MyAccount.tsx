import React, { useState } from "react";
import { ChangePswdModal } from "../ChangePswdModal/ChangePswdModal";
import { Sidebar } from "../sidebar/Sidebar";
import "./MyAccount.css";

const MyAccount = () => {
  const [chngPswdModal, setChngPswdModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <main className="myAccountMain">
      <Sidebar />
      <div
        className={chngPswdModal ? "myAccountDiv hideOverflow" : "myAccountDiv"}
      >
        <div className="myAccountHeading">
          <h2 className="myAccHeading">My Account</h2>
          <p className="divider"></p>
        </div>
        <fieldset className={edit ? "informations editMode" : "informations"}>
          <legend>
            <p className="heading">General Information</p>
          </legend>
          <div className="inputDiv">
            <label className="labels">
              <small className="inputName">Full Name</small>
              <input className="informationInput" type="text" />
            </label>
            <label className="labels">
              <small className="inputName">Initials</small>
              <input className="informationInput" type="text" />
            </label>
            <label className="labels">
              <small className="inputName">Email</small>
              <input className="informationInput" type="text" />
            </label>
            <label className="labels">
              <small className="inputName">Time Zone</small>
              <input className="informationInput" type="text" />
            </label>
            <label className="labels">
              <span className="changePasswordSpan">
                <small className="inputName">Password</small>
                <small className="changePassword">
                  <h5
                    onClick={() => setChngPswdModal(!chngPswdModal)}
                    className="changePasswordModalLink"
                  >
                    Change password
                  </h5>
                </small>
              </span>
              <input className="informationInput" type="text" />
            </label>
          </div>
        </fieldset>
        <fieldset
          className={
            edit ? "informations notify editMode" : "informations notify"
          }
        >
          <legend>
            <p className="heading">Notifications</p>
          </legend>
          <div>
            <h4>Notify when my stories are </h4>
            <div className="notifyTypes">
              <label htmlFor="delivered" className="notifyLabel">
                <input className="notifyInput" id="delivered" type="checkbox" />
                <span>Delivered</span>
              </label>
              <label htmlFor="accepted" className="notifyLabel">
                <input className="notifyInput" id="accepted" type="checkbox" />
                <span>Accepted</span>
              </label>
              <label htmlFor="rejected" className="notifyLabel">
                <input className="notifyInput" id="rejected" type="checkbox" />
                <span>Rejected</span>
              </label>
            </div>
          </div>
        </fieldset>
        <button className="editButton btn" onClick={() => setEdit(!edit)}>
          Edit
        </button>
      </div>
      {chngPswdModal ? (
        <ChangePswdModal
          chngPswdModal={chngPswdModal}
          setChngPswdModal={setChngPswdModal}
        />
      ) : null}
    </main>
  );
};

export { MyAccount };
