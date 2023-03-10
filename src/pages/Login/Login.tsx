import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const { registerUser, setregisterUser } = useAuth();

  const navigate = useNavigate();
  
  const signInHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (Email === " " || Password === " " || Email === "" || Password === "") {
      toast.error("Please fill the fields.");
    }
    if (Email && Password) {
      //eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        if (Password.length >= 6) {
          localStorage.setItem(
            "userDetail",
            JSON.stringify({ Email, Password })
          );
          setregisterUser([...registerUser, { Email, Password }]);
          setEmail("");
          setPassword("");
          toast.success("LoggedIn successfully");
          navigate("/", { replace: true });
        } else {
          toast.error("Password must be 6 character long. ");
        }
      } else {
        toast.error("Invalid Email.");
      }
    }
  };

  localStorage.setItem("registeredUser", JSON.stringify(registerUser));

  return (
    <main className="loginMain">
      <img
        className="loginPageLogo"
        src="https://tracker.builder.ai/assets/images/trackerLogo.png"
        alt="logo"
      />
      <h2>Sign in to Builder Tracker</h2>
      <form action="Sidebar">
        <div className="greyText loginDiv">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="informationInput"
            id="email"
            value={Email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>  setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={Password}
            id='password'
            className="informationInput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <button
            onClick={(e) => signInHandler(e)}
            className="btn primaryBtn"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </main>
  );
};

export { Login };
