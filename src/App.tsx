import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import Stories from "./components/Stories/Stories";
import { Admin } from "./pages/Admin/Admin";
import { MyAccount } from "./components/MyAccount/MyAccount";
import { Toaster } from "react-hot-toast";
import { StoryPopup } from "./components/StoryPopup/StoryPopup";
function App() {
  
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/storypopup" element={<StoryPopup />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route
          path="/"
          element={Email ? <Home /> : <Navigate replace to={"/login"} />}
        /> */}  <Route path='/projects' element={<Stories/>}/>

      </Routes>
    </div>
  );
}

export default App;
