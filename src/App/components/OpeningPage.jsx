import React from 'react';
import { Router, Link } from 'react-router-dom';

const OpeningPage = () => {
  return (
    <Router>
      <div className="opening buttons">
        <Link to="./directoryPage.js"> All </Link> <p> Was this linked ? </p>{' '}
      </div>{' '}
      <div className="opening buttons">
        <Link to="./filterPage.js"> Filter </Link>{' '}
      </div>{' '}
      <div className="opening buttons"> TeamBuilder </div>{' '}
    </Router>
  );
};

export default OpeningPage;
