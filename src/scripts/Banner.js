import '../css/index.css';
import './App.test.js';
import banner from '../images/banner.jpg';

function Banner() {
    return (
        <div className='Banner'>
            <div className='Image-sec'>
                <img src={banner} className="Banner-img" alt="banner" />
            </div>
            <div className='Content-sec'>
                <div className='Content'>
                    <h1 className='Banner-title'>Daily News</h1>
                    <p className='Banner-des'>To view all kind of news here on day to day life.</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;