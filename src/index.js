import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppUser';
import AppStatistics from './AppStatistics';
import AppFriends from './AppFriends';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppStatistics />
    <AppFriends />
  </React.StrictMode>,
  document.getElementById('root'),
);
