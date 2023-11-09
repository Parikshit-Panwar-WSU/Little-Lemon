import './Header.js';
import Header from './Header.js';
import Logo from '../Assets/lemon dessert.jpg';
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
    const styleObj_h1 = {
        marginTop: 0,
        marginBottom: 0,
        color: '#495e57',
        fontSize: 40
    }

    const styleObj_h4 = {
        marginTop: 0,
        fontSize: 20,
        color: '#495e57'
    }

    return (
        <main className='flex-container' style={{marginTop: 20}}>
            <article style={{width: 400}}>
                <Header>
                    <h1 style={styleObj_h1}>Little Lemon</h1>
                    <h4 style={styleObj_h4}>Chicago</h4>
                </Header>
                <p style={{marginBottom: 30}}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
                <Button className='button-class'>Reserve a Table</Button>
            </article>
            <img src={Logo} alt="Logo" style={{borderRadius: 10}} />
        </main>
    );
}

export default HeroSection;