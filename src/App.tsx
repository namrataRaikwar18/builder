import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Cards/Home';
import Login from './components/Login/Login';
import { MyAccount } from './components/MyAccount/MyAccount;
import { Sidebar } from './components/sidebar/Sidebar';
import Stories from './components/Stories/Stories';
import Todo from './components/Todo';

function App() {
 type property = {
    height?: number,
    bgcolor?: any,
    progress?: any,
}
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MyAccount />}/>
        <Route path='/admin' element={<Admin />}/>
         <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;



