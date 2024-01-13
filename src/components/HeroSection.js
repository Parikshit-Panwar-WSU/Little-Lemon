import './Header.js';
import Header from './Header.js';
import Logo from '../Assets/lemon dessert.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const littleLemonHeading = {
        marginTop: 0,
        marginBottom: 0,
        color: '#f4ce14',
        fontSize: 40
    };

    const chicagoHeading = {
        marginTop: 0,
        fontSize: 20,
        color: '#edefee'
    };

    return (
        <main role='heroSection' className='flex-container heroMobile' style={{padding: 20, backgroundColor: '#495e57'}}>
            <article style={{width: 400}}>
                <Header>
                    <h1 style={littleLemonHeading}>Little Lemon</h1>
                    <h4 style={chicagoHeading}>Chicago</h4>
                </Header>
                <p style={{marginBottom: 30, color: '#edefee'}}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
                <Link to='/booking' className='button-class'>Reserve a Table</Link>
            </article>
            <img src={Logo} alt="Logo" style={{borderRadius: 10}} />
        </main>
    );
}

export default HeroSection;