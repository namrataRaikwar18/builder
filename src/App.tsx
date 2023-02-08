import React from 'react';
import './App.css';
import { MyAccount } from './components/MyAccount/MyAccount';
import { Route, Routes } from 'react-router-dom';
import { Admin } from './pages/Admin/Admin';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MyAccount />}/>
        <Route path='/admin' element={<Admin />}/>
      </Routes>
    </div>
  );
}

export default App;



