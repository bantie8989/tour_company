import React, { useState } from "react";
import "./email.css";

const EmailSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Email submitted:", email);
    // You can add your logic here to send the email subscription request to the server
    // For example, you can use fetch or axios to make an API call to your backend
    // and handle the response accordingly
    // Example using fetch:
    // fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log('Subscription response:', data);
    //     // Handle the response from the server
    //   })
    //   .catch((error) => {
    //     console.error('Error subscribing:', error);
    //     // Handle the error
    //   });
  };

  return (
    <form onSubmit={handleSubmit} className="email-subscription">
      <p className="message">
        <span className="grace">Thank you for choosen us</span>
        leave your Email for updated news from our website
      </p>
      <div className="email-container">
        <label htmlFor="email" className="email-label">
          Your Email{" "}
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
        />
      </div>
      <button type="submit" className="subscribe-button">
        Subscribe
      </button>
    </form>
  );
};

export default EmailSubscription;
