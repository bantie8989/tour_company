import Googlemap from "../googlemapComponent/Googlemap";
import "./contactForm.css";

import React, { useState } from 'react';

function  ContactForms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (

    <div className="contact-container">
      <div className="google-map">
        <Googlemap/>
      </div>
          <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input className="contact-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input className="contact-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Subject:
        <input className="contact-input" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </label>
      <label className="message-lable">
        Message:
        <textarea className="contact-textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button className="contact-button" type="submit">Send Message</button>
    </form>
    </div>
  );
};

export default ContactForms;