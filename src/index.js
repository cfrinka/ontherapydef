import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewUser from './pages/new-user';
import TherapistHome from './pages/therapist-home';
import PatientHome from './pages/patient-home';
import NewPost from './pages/new-post';

ReactDOM.render(
  <React.StrictMode>
    <PatientHome />
  </React.StrictMode>,
  document.getElementById('root')
);
