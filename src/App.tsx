import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Cards/Home';
import Login from './pages/Login/Login';
import { Sidebar } from './components/sidebar/Sidebar';
import Stories from './components/Stories/Stories';
import Todo from './components/Todo';
import { Admin } from './pages/Admin/Admin';
import { MyAccount } from './components/MyAccount/MyAccount';

function App() {
 type property = {
    height?: number,
    bgcolor?: any,
    progress?: any,
}
  return (
    <div className="App">
      <Routes>
        <Route path='/myaccount' element={<MyAccount />}/>
        <Route path='/admin' element={<Admin />}/>
         <Route path="/" element={<Home />} />
         <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>

  );
}

export default App;



