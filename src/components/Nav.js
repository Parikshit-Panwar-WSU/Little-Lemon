import '../App.css';
import Logo from '../Assets/Logo.svg';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className='flex-container navMobile'>
            <img src={Logo} alt='Logo' />
            <ul className='flex-container navMobile' style={{alignContent: 'center'}}>
                <li><Link to='/'
                        className={props.currPage == props.pageMode.HOME ? 'page-selected' : ""}
                        onClick={() => props.updatePage(props.pageMode.HOME)} > HOME
                    </Link>
                </li>
                <li><Link to='#'>ABOUT</Link></li>
                <li><Link to='#'>MENU</Link></li>
                <li><Link to='/booking'
                        className={props.currPage == props.pageMode.RESERVATION ? 'page-selected' : ""}
                        onClick={() => props.updatePage(props.pageMode.RESERVATION)} >RESERVATIONS
                    </Link>
                </li>
                <li><Link to='#'>ORDER ONLINE</Link></li>
                <li><Link to='#'>LOGIN</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;