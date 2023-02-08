import React, { useEffect, useState } from "react";
import "./Login.css";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [EmailList, setEmailList] = useState<string[]>([])

  const addTodo = () => {
    const Data = {
      Email,
      Password,
    };
    // setEmailList([...EmailList,Email])
    // setEmailList([...EmailList,Password])

    localStorage.setItem("Data", JSON.stringify(Data));
    setEmail("");
    setPassword("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form action="Sidebar">
      
      <div className="Head">
        <div>
          <h1 style={{ color: "purple" }}>Builder TRACKER</h1>
        </div>
        <div style={{ margin: "30px 0px" }}>
          <h2>Sign in to tracker App</h2>
        </div>
        <div>
          <div style={{ margin: "10px" }}>
            <h3>Email:</h3>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="input__box"
              id="email"
              value={Email}
              onChange={handleEmailChange}
            />
          </div>

          <div style={{ margin: "10px" }}>
            <h3>Password:</h3>

            <input
              type="password"
              placeholder="Enter Password"
              value={Password}
              className="input__box"
              onChange={handlePassChange}
            />
          </div>
          <div>
            <button
              onClick={() => navigate("/")}
              className="input_submit"
              type="submit"
            >
              {" "}
              Sign In
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
