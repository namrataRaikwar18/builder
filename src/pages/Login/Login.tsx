import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import toast from "react-hot-toast";
import axios from "axios";

const getRegisterUser = async (
  setregisterUser: React.Dispatch<React.SetStateAction<string[]>>
) => {
  try {
    const res = await axios.get(
      "https://builder-e72c1-default-rtdb.firebaseio.com/registerUser.json"
    );
    setregisterUser([...res.data.registerUser]);
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(res.data.registerUser)
    );
  } catch (error) {
    console.error(error);
  }
};
const Login = () => {
  const { userData, setUserData } = useAuth();
  const { email, password } = userData;

  const [registerUser, setregisterUser] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getRegisterUser(setregisterUser);
  }, []);

  const registerUserHandler = async (email: string) => {
    const checkingUser = registerUser.some((user) => user === email);
    if (checkingUser) {
      setregisterUser([...registerUser]);
      localStorage.setItem("registeredUser", JSON.stringify(registerUser));
    } else {
      console.log(registerUser, "register user");
      registerUser.push(email);
      setregisterUser([...registerUser]);
      try {
        const res = await axios.put(
          "https://builder-e72c1-default-rtdb.firebaseio.com/registerUser.json",
          { registerUser },
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(res, "register");
        localStorage.setItem(
          "registeredUser",
          JSON.stringify(res.data.registerUser)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

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

export { Login, getRegisterUser };
