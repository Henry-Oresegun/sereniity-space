import React, { useState } from 'react';
import './Enquire.css';

const Enquire = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [buttonShake, setButtonShake] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const phoneNumberRegex = /^(?:\+44|0)\d{10}$/;
    const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

    if (fullName && phoneNumberRegex.test(phoneNumber) && emailRegex.test(email)) {
      setFormSubmitted(true); // Set the form as submitted before sending the email
      sendEmail();
    } else {
      handleIncorrectFormSubmit();
    }
  };

  const handleIncorrectFormSubmit = () => {
    setButtonShake(true);
    setFormSubmitted(false);
    setTimeout(() => {
      setButtonShake(false);
    }, 300);
  };

  const sendEmail = () => {
    const emailData = {
      fullName,
      phoneNumber,
      email,
    };

    // Make a POST request to the server endpoint for sending the email
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        if (response.ok) {
          // Email sent successfully, show success message or perform other actions
          console.log('Email sent successfully!');
        } else {
          // Error sending email, show error message or perform error handling
          console.error('Failed to send email.');
        }
      })
      .catch((error) => {
        // Network error or other exception occurred
        console.error('Failed to send email:', error);
      });
  };

  const handleInputChange = (e) => {
    setButtonShake(false);
    setFormSubmitted(false);

    if (e.target.name === 'fullName') {
      setFullName(e.target.value);
    } else if (e.target.name === 'phoneNumber') {
      setPhoneNumber(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  return (
    <div className={`app__enquire ${formSubmitted ? 'form-submitted' : ''}`}>
      <div className="app__enquire-heading">
        <h1 className="headtext__opensans">Enquire Now</h1>
        {!formSubmitted && (
          <p className="p__opensans">Please just give us a call or send an enquiry below. </p>
        )}
      </div>

      {!formSubmitted ? (
        <form className="app__enquire-input flex__center" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className={`custom__button ${buttonShake ? 'shake-animation' : ''}`}
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="form__submission-message">
          <p>Thanks for enquiring, we'll be in touch.</p>
        </div>
      )}
    </div>
  );
};

export default Enquire;
