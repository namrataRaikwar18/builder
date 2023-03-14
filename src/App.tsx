import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Cards/Home';
import Login from './components/Login/Login';
import { MyAccount } from './components/MyAccount/MyAccount';
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
    <Router>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/projects' element={<Stories/>}/>

          </Routes>
        </Router>
  );
}

export default App;
