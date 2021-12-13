import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppUser';
import AppStatistics from './AppStatistics';
import AppFriends from './AppFriends';
import AppTransactions from './AppTransactions';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppStatistics />
    <AppFriends />
    <AppTransactions />
  </React.StrictMode>,
  document.getElementById('root'),
);
