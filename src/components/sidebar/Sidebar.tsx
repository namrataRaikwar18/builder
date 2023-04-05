import React, { useEffect, useState } from "react";
import { MdWebStories } from "react-icons/md";
import {
  Link,
  useNavigate,
  useLocation,
  NavLink,
  useParams,
} from "react-router-dom";
import "./Sidebar.css";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

const Sidebar = () => {
  const [accountModel, setAccountModel] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { userData, setUserData } = useAuth();
  const { email } = userData;
  const { projectId } = useParams();

  const showAccountModel = () => {
    setAccountModel(!accountModel);
  };

  const userDetailFromLocal = JSON.parse(
    localStorage.getItem("userDetail") || "{}"
  );

  useEffect(() => {
    if (!userDetailFromLocal.email) {
      navigate("/");
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userDetail");
    setUserData({ email: "", password: "" });
    navigate("/");
    toast.success("Loggedout Successfully.");
  };

  return (
    <div className="sidebar">
      <div className="">
        {/* <img
          className="logo cursorPointer"
          src="https://tracker.builder.ai/assets/images/trackerLogo.png"
          alt="logo"
          onClick={() => navigate("/home")}
        /> */}
        <h1 className="logo cursorPointer" onClick={() => navigate("/home")}>
          Pixoatic
        </h1>
        <div className="sidebarMiddlePart">
          <div className="projectDiv">
            <div className=" signalProject">
              <div>
                <h3 className="cursorPointer" onClick={() => navigate("/home")}>
                  Buildscard
                </h3>
              </div>
            </div>
            <p className="divider"></p>
            <ul className="sidebarList greyText">
              {location.pathname === `/projects/${projectId}` ? (
                <NavLink
                  className="eachSidebarList list greyText"
                  to={`/projects/${projectId}`}
                >
                  <MdWebStories className="icon" />
                  Stories
                </NavLink>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <footer
        className="sidebarFotter"
        data-testid="sidebarFotter"
        onClick={showAccountModel}
      >
        {accountModel ? (
          <div className="accountModel" data-testid="accountModel">
            <ul className="list ">
              <li className="accountModelList">
                <Link to={"/myaccount"} className="link">
                  My Account
                </Link>
              </li>
              <p className="divider"></p>
              <li className="accountModelList" onClick={() => logoutHandler()}>
                Log out
              </li>
            </ul>
          </div>
        ) : null}
        <div className="profileDiv">
          <p className="avatar">{email ? email[0].toUpperCase() : null}</p>
          <div className="nameAndEmail">
            <p>{email ? email[0] : null}</p>
            <small className="greyText useremail">{email ? email : null}</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Sidebar };
