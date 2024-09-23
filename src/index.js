import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faMagnifyingGlass, faSpinner, faPhone, faEnvelope, faLocationDot, faBars, faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee, faMagnifyingGlass, faSpinner, faPhone, faEnvelope, faLocationDot, faBars, faTimes, faArrowLeft)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
