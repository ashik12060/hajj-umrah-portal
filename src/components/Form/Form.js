import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [message, setMessage] = useState('');

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here (e.g., send to a backend)
    console.log({ name, phone, email, serviceType, message });
    // Reset the form after submission
    setName('');
    setPhone('');
    setEmail('');
    setServiceType('');
    setMessage('');
    // Hide the form after submission
    setIsFormVisible(false);
  };

  return (
    <div className="form-wrapper">
      <button onClick={toggleFormVisibility} className="toggle-form-button">
        {isFormVisible ? 'Close Form' : 'Open Form'}
      </button>

      {isFormVisible && (
        <>
          <div className="modal-overlay" onClick={toggleFormVisibility}></div>
          <div className="modal-container">
            <form onSubmit={handleSubmit} className="modal-form">
              <h2 className='text-2xl font-medium text-black py-3'>Welcome To</h2>
              <hr />
              <div className='pt-2'>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="serviceType">Service Type:</label>
                <select
                  id="serviceType"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="">--Select Service Type--</option>
                  {/* Add service type options here */}
                </select>
              </div>
              <div>
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Form;
