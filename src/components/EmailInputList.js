import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import './EmailInputList.css';

const EmailInputList = () => {
  const [emails, setEmails] = useState(['']);

  const handleAddEmail = () => {
    setEmails([...emails, '']);
  };

  const handleRemoveEmail = (index) => {
    const newEmails = emails.filter((_, i) => i !== index);
    setEmails(newEmails);
  };

  const handleEmailChange = (index, value) => {
    const newEmails = emails.map((email, i) => (i === index ? value : email));
    setEmails(newEmails);
  };

  return (
    <div className="email-input-list">
      <h2>Google EmailId's for FRP</h2>
      <div className="input-group">
        {emails.map((email, index) => (
          <div className="email-input-row" key={index}>
            <input
              type="text"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              className="email-input"
            />
            <button
              type="button"
              onClick={() => handleRemoveEmail(index)}
              className="remove-button"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={handleAddEmail} className="add-button">
        <FaPlus />
      </button>
    </div>
  );
};

export default EmailInputList;
