import React, { useState } from "react";
import { ChangePswdModal } from "../ChangePswdModal/ChangePswdModal";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../sidebar/Sidebar";
import "./StoryPopup.css";
import { useNavigate } from "react-router";
const StoryPopup = () => {
  const [chngPswdModal, setChngPswdModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <main className="myAccountMain">
      <Sidebar />
      <section>
        <Navbar />
        <div
          className={
            chngPswdModal ? "myAccountDiv hideOverflow" : "myAccountDiv"
          }
        >
          <div className="myAccountHeading">
            <h2 className="myAccHeading">Story Edit</h2>
            <p className="divider"></p>
          </div>
          <fieldset >
            <legend>
              <p className="heading"></p>
            </legend>
            <div className="inputDiv">
              <label className="labels">
                <small className="inputName">Description</small>
                <input className="informationInput" type="text" />
              </label>
              
            </div>
          </fieldset>
          
          <button className="primaryBtn btn display" onClick={() => navigate('/projects')}>
            Edit
          </button>
        </div>
      </section>
      {chngPswdModal ? (
        <ChangePswdModal
          chngPswdModal={chngPswdModal}
          setChngPswdModal={setChngPswdModal}
        />
      ) : null}
    </main>
  );
};

export { StoryPopup };
