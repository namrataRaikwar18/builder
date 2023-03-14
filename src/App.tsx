import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Sidebar } from "./components/sidebar/Sidebar";
import Stories from "./components/Stories/Stories";
import Todo from "./components/Todo";
import { Admin } from "./pages/Admin/Admin";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Toaster } from "react-hot-toast";

function App() {
  type property = {
    height?: number;
    bgcolor?: any;
    progress?: any;
  };
  const { Email, Password } = JSON.parse(
    localStorage.getItem("userDetail") || "{}"
  );
  console.log(Email,'email')
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route
          path="/"
          element={Email ? <Home /> : <Navigate replace to={"/login"} />}
        /> */}            <Route path='/projects' element={<Stories/>}/>

      </Routes>
    </div>
  );
}

export default App;
