import headerlogo from '../images/kryp.png';
import '../css/App.css';
import '../css/index.css';
import './App.test.js';


function Header() {
  return (
      <div className='Header'>
        <div className='Header-row'>
          <ul>
            <li><img src={headerlogo} alt="logo" className='Logo' /></li>
          </ul>
          <ul>
            <li><a href="#home" className='Menu-link'>Home</a></li>
            <li><a href="#blogs" className='Menu-link'>Blogs</a></li>
            <li><a href="#contact" className='Menu-link'>Contact-us</a></li>
          </ul>
        </div>
      </div>
  );
}

export default Header;
