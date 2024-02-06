import '../css/index.css';
import '../scripts/App.test.js';
import quiz from '../images/quiz.jpeg';
import uix from '../images/uix.jpeg';
import jquery from '../images/jquery.jpeg';

function Blogs() {
    return (
        <div className='Blogs'>
            <div className='Blogs-sec'>
                <div className='Blog-one'>
                    <p className='Date'>Date: 06-02-2024</p>
                    <div className='Blogs-image-sec'>
                        <img src={quiz} alt="blogs" className='Blogs-image' />
                    </div>
                    <div className='Text-block'>
                        <h1 className='Blogs-title'>Quiz</h1>
                        <p className='Blogs-des'>Anandh create html and css quiz for our team.</p>
                        
                    </div>
                </div>
                <div className='Blog-one'>
                    <p className='Date'>Date: 07-02-2024</p>
                    <div className='Blogs-image-sec'>
                        <img src={uix} alt="blogs" className='Blogs-image' />
                    </div>
                    <div className='Text-block'>
                        <h1 className='Blogs-title'>GPA Session</h1>
                        <p className='Blogs-des'>Tomorrow Ramkumar take a session about UIX.</p>
                    </div>
                </div>
                <div className='Blog-one'>
                    <p className='Date'>Date: 07-02-2024</p>
                    <div className='Blogs-image-sec'>
                        <img src={jquery} alt="blogs" className='Blogs-image' />
                    </div>
                    <div className='Text-block'>
                        <h1 className='Blogs-title'>Dev Session</h1>
                        <p className='Blogs-des'>Krishna and Ramesh take a jquery session.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;