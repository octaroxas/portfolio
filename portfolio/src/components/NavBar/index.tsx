import React from 'react';
import './css/index.css';
import Profile from '../../images/profile.png';

function NavBar() {
   return (
      <>
         <nav>
            <a href="/">
               <img className="nav-img" src={Profile} alt="Profile" />
               Portfólio Page
            </a>
         </nav>
      </>
   );
}

export default NavBar;