import React, { useState } from 'react';
import { FaEllipsisV, FaPlay, FaStop } from 'react-icons/fa';
import './CardTiles.css';

const CardTiles = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const cards = [
    {
      id: 1,
      user: 'sayedameen_Pro',
      status: 'Running',
      content: 'Lorem ipsum content. Lorem ipsum content',
      time: '3.1 hrs',
      progress: 60,
      showProgress: true,
    },
    {
      id: 2,
      user: 'sayedameen_Pro',
      status: 'Not Running',
      content: 'Lorem ipsum content. Lorem ipsum content',
      time: '3.1 hrs',
      progress: null,
      showProgress: false,
    },
    {
      id: 3,
      user: 'sayedameen_Pro',
      status: 'Running',
      content: 'Lorem ipsum content. Lorem ipsum content',
      time: '3.1 hrs',
      progress: 50,
      showProgress: true,
    },
    {
      id: 4,
      user: 'sayedameen_Pro',
      status: 'Not Running',
      content: 'Lorem ipsum content. Lorem ipsum content',
      time: '3.1 hrs',
      progress: 30,
      showProgress: false,
    },
  ];

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="card-tiles">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-header">
            <h3>User: {card.user}</h3>
            <FaEllipsisV
              className="ellipsis-icon"
              onClick={() => handleDropdownToggle(card.id)}
            />
            {openDropdown === card.id && (
              <div className="dropdown-menu">
                <button className="dropdown-item">Share Project</button>
                <button className="dropdown-item">Copy Project</button>
                <button className="dropdown-item">Refresh</button>
                <button className="dropdown-item">Logs</button>
                <button className="dropdown-item">Edit</button>
                <button className="dropdown-item">Delete</button>
              </div>
            )}
          </div>
          <div className="card-status">
            <div
              className={`status-indicator ${card.status === 'Running' ? 'running' : 'not-running'}`}
            />
            <p>{card.content}</p>
            <p>{card.time}</p>
          </div>
          <div className="card-controls">
            <FaPlay className="control-icon play" />
            <FaStop className="control-icon stop" />
            <span className="details-link">Details</span>
          </div>
          {card.showProgress && (
            <div className="progress-bar">
              <div className="progress" style={{ width: `${card.progress}%` }} />
              <p className="progress-text">Packages: Downloading packages... {card.progress}%</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardTiles;
