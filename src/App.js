import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer.js';
import Banner from './components/Banner.js';
import Blogs from './components/Blogs.js';

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <Blogs />
    <Footer />
    </div>
  );
}

export default App;
