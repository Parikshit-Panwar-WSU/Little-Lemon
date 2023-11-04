import { Box, HStack } from "@chakra-ui/react";
import Logo from '../Assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <HStack spacing='25px'>
                <Box w='150px' h='80px'>
                    <img src={Logo} alt='Logo' />
                </Box>
                <ul>
                    <li>Doormat</li>
                    <li>Navigation</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul>
                    <li>Contact</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
                <ul>
                    <li>Social Media Links</li>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </HStack>
        </footer>
    );
}

export default Footer;