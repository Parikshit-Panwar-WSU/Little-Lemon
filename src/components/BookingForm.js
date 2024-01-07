import { type } from '@testing-library/user-event/dist/type';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import Header from './Header';

const BookingForm = () => {
    return (
        <section style={{padding: 20, backgroundColor: '#495e57'}}>
            <Header>
                <h1 style={{color: '#f4ce14'}}>Reservations</h1>
            </Header>
            <form>
                
            </form>
        </section>
    );
}

export default BookingForm;