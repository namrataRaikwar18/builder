import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import Stories from "./components/Stories/Stories";
import { Admin } from "./pages/Admin/Admin";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Toaster } from "react-hot-toast";
function App() {
  
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path='/projects/:projectId' element={<Stories/>}/>

      </Routes>
    </div>
  );
}

export default App;
