import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './Admin.css';

const Admin = () => {

  const usersFromLocalstorage = JSON.parse(localStorage.getItem('registeredUser') || '[]')
  const {Email} = JSON.parse(localStorage.getItem('userDetail') || '{}');


  return (
    <main className='adminMain'>
      <Sidebar />
      <div className='adminDiv'>
      <Navbar/>
      <section className='adminSection'>
        <div className='adminHeader'>
        <h1 className='adminHeading'>Admin Portal</h1>
        <p className='divider'></p>
        </div>
        <h3>All Registered Email:</h3>
        <div>
        <ol className='emailList padding_2rem'>
          <li>
          {Email}
          </li>
          {/* {usersFromLocalstorage?.map((user:any) => {
            return(
              <li key={user.Email}>{user.Email}</li>
              )
           })}  */}
        </ol>
        </div>
      </section>
      </div>
    </main>
  )
}

export {Admin};