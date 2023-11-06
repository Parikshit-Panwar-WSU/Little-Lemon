import '../App.css';
import { Box, Center, HStack } from "@chakra-ui/react";
import Logo from '../Assets/Logo.svg';

const Footer = () => {
    return (
        <footer className='flex-container' style={{gap: 120}}>
            <Box w='150px' h='full' display='flex' alignItems='center'>
                <img src={Logo} alt='Logo' />
            </Box>
            <ul>
                <li style={{color: '#495e57', fontWeight: 'bold'}}>
                    Doormat Navigation
                </li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li style={{color: '#495e57', fontWeight: 'bold'}}>Login</li>
            </ul>
            <ul>
                <li style={{color: '#495e57', fontWeight: 'bold'}}>Contact</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
            <ul>
                <li style={{color: '#495e57', fontWeight: 'bold'}}>Social Media Links</li>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </footer>
    );
}

export default Footer;