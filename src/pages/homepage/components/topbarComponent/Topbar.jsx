import React from "react";
import {  Link } from 'react-router-dom';import "./topbar.css";


function Topbar() {

  return (
    <header className="topbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="public\assets\images\logo.jpg" className= "logo_image" alt="Tourism Management System" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link"  to="/tour">Tour Packages</Link>
            </li>
            <li>
              <Link  className="link"  to="/about">About Us</Link>
            </li>
            <li>
              <Link className="link"  to="/booking">Booking</Link>
            </li>

            {/* Add a link to the login page if the user is not logged in */}
            {!localStorage.getItem("token") && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {/* Add a link to the register page if the user is not logged in */}
            {!localStorage.getItem("token") && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}

            {/* Add a link to the my bookings page if the user is logged in */}
            {localStorage.getItem("token") && (
              <li>
                <Link to="/my-bookings">My Bookings</Link>
              </li>
            )}
            {/* Add a link to the admin dashboard page if the user is an administrator */}
      
            {/* Add a logout button if the user is logged in */}
            {localStorage.getItem("token") && (
              <li>
                <button onClick={() => localStorage.removeItem("token")}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Topbar;