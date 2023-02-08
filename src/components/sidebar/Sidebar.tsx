import React, { useState } from "react";
import { BsBook } from "react-icons/bs";
import { FaRegQuestionCircle } from "react-icons/fa";
import {MdWebStories} from 'react-icons/md';
import {BiChalkboard} from 'react-icons/bi';

import { Link } from "react-router-dom";
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
            <div>
              <h3>Buildscard</h3>
              <small className="greyText">PEPtlk</small>
            </div>
            </div>
            <p className="divider"></p>
            <ul className="sidebarList greyText">
              <li className="eachSidebarList">
                <BsBook className="icon"/>
                Brief & Documents
                </li>
              <li className="eachSidebarList">
                <MdWebStories className="icon"/>
                Stories</li>
              <li className="eachSidebarList">
                <BiChalkboard className="icon"/>
                Whiteboard</li>
            </ul>
          </div>
          <h4 className="greyText eachSidebarList">

          <FaRegQuestionCircle />
            Help
            </h4>
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
              <li className="accountModelList">

              <Link to={'/'} className="myAccountLink link">My Account</Link>
              </li>
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
