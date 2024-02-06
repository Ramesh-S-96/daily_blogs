import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Header from './scripts/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './scripts/Footer.js';
import Banner from './scripts/Banner.js';
import Blogs from './scripts/Blogs.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Blogs />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();