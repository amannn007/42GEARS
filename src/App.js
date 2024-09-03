import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import CardTiles from './components/CardTiles';
import EmailInputList from './components/EmailInputList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Table />} />
              <Route path="/menu2" element={<CardTiles />} />
              <Route path="/menu3" element={<EmailInputList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
