import React from "react";
import "./topbar.css";

function Topbar() {
  return (
    <header className="topbar">
      <div className="container">
        <a to="/" className="logo">
          <img src="public\assets\images\logo.jpg" className= "logo_image"alt="Tourism Management System" />
        </a>
        <nav>
          <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/tour-packages">Tour Packages</a>
            </li>
            <li>
              <a to="/about-us">About Us</a>
            </li>
            <li>
              <a to="/contact-us">Contact Us</a>
            </li>
            {/* Add a link to the login page if the user is not logged in */}
            {!localStorage.getItem("token") && (
              <li>
                <a to="/login">Login</a>
              </li>
            )}
            {/* Add a link to the register page if the user is not logged in */}
            {!localStorage.getItem("token") && (
              <li>
                <a to="/register">Register</a>
              </li>
            )}
            {/* Add a link to the my bookings page if the user is logged in */}
            {localStorage.getItem("token") && (
              <li>
                <a to="/my-bookings">My Bookings</a>
              </li>
            )}
            {/* Add a link to the admin dashboard page if the user is an administrator */}
            {localStorage.getItem("isAdmin") === "true" && (
              <li>
                <a to="/admin-dashboard">Admin Dashboard</a>
              </li>
            )}
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