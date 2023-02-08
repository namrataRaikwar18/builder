import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [accountModel, setAccountModel] = useState<boolean>(false);

  const showAccountModel = () => {
    setAccountModel(!accountModel);
  };

  return (
    <div className="sidebar">
      <div className="">
        <img
          className="logo"
          src="https://tracker.builder.ai/assets/images/trackerLogo.png"
          alt="logo"
        />
        <div className="sidebarMiddlePart">
          <div className="projectDiv">
            <div className=" signalProject">
              <h3>Buildscard</h3>
              <small className="greyText">PEPtlk</small>
            </div>
            <p className="divider"></p>
            <ul className="sidebarList greyText">
              <li className="eachSidebarList">Brief & Documents</li>
              <li className="eachSidebarList">Stories</li>
              <li className="eachSidebarList">Whiteboard</li>
            </ul>
          </div>
          <h4 className="greyText eachSidebarList">Help</h4>
        </div>
      </div>
      <p className="divider"></p>
      <footer
        className="sidebarFotter"
        data-testid="sidebarFotter"
        onClick={showAccountModel}
      >
        {accountModel ? (
          <div className="accountModel" data-testid="accountModel">
            <ul className="list ">
              <li className="accountModelList">My Account</li>
              <p className="divider"></p>
              <li className="accountModelList">Log out</li>
            </ul>
          </div>
        ) : null}
        <div className="profileDiv">
          <p className="avatar">A</p>
          <div className="nameAndEmail">
            <p>anand pathak</p>
            <small className="greyText useremail">
              anand.pathak@pixoatic.com
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Sidebar };
