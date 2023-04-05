import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";

const Login = () => {
  const { userData, setUserData } = useAuth();
  const { email, password } = userData;

  const [registerUser, setregisterUser] = useState<string[]>(JSON.parse(localStorage.getItem('registeredUser') || '[]'));

  const navigate = useNavigate();


  const registerUserHandler = (email:string) => {
    const checkingUser = registerUser.some((user) => user === email )
    if(checkingUser){
      setregisterUser([...registerUser])
    }
    else{
      registerUser.push(email)
      setregisterUser([...registerUser])
      localStorage.setItem("registeredUser", JSON.stringify(registerUser));
    }
  }

  const signInHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (email === " " || password === " " || email === "" || password === "") {
      toast.error("Please fill the fields.");
    }
    if (email && password) {
      //eslint-disable-next-line
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        if (password.length >= 6) {
          localStorage.setItem("userDetail", JSON.stringify(userData));
          registerUserHandler(email);
          navigate("/home");
          toast.success("LoggedIn successfully");
        } else {
          toast.error("Password must be 6 character long.");
        }
      } else {
        toast.error("Invalid Email.");
      }
    }
  };


  return (
    <main className="loginMain">
      {/* <img
        className="loginPageLogo"
        src="https://tracker.builder.ai/assets/images/trackerLogo.png"
        alt="logo"
      /> */}
      <h1 className="projectTitle">Pixoatic Solutions</h1>
      <h2>Sign in </h2>
      <form action="Sidebar">
        <div className="greyText loginDiv">
          <label htmlFor="email">Email address</label>
          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="informationInput"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
          required
            type="password"
            placeholder="Password"
            value={password}
            id="password"
            className="informationInput"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserData({ ...userData, password: e.target.value })
            }
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
