import '../css/index.css';
import '../App.test';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer-row'>
                <div className='Footer-input'>
                    <input type="email" val="email" className='Input-email' />
                    <input type='submit' val="submit" className='Input-submit' />
                </div>
                <p className='Copy-rights'>@Ramesh-blogs...</p>
            </div>
        </div>
    );
}

export default Footer;