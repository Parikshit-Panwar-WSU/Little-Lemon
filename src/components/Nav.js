import '../App.css';
import Logo from '../Assets/Logo.svg';

const Nav = () => {
    return (
        <nav className='flex-container'>
            <img src={Logo} alt='Logo' />
            <ul className='flex-container' style={{alignContent: 'center'}}>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">MENU</a></li>
                <li><a href="#">RESERVATIONS</a></li>
                <li><a href="#">ORDER ONLINE</a></li>
                <li><a href="#">LOGIN</a></li>
            </ul>
        </nav>
    );
}

export default Nav;