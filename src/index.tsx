import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Api from './services/Utility/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const runApp = async () => {
  Api.init();
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

runApp();

