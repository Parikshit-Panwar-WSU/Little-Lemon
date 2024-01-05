import { type } from '@testing-library/user-event/dist/type';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';

const BookingForm = () => {
    return (
        <main role='reservationSection' className='flex-container reservationMobile'
        style={{padding: 20, backgroundColor: '#495e57'}}>
            <section style={{width: 400}}>
                <Form>
                    {['radio'].map((type) => (
                        <Form.Check
                            style={{color: '#edefee'}}
                            type={type}
                            label={`Indoor seating`}
                            id={`${type}`}
                        />
                    ))}
                </Form>
                <p style={{marginBottom: 30, color: '#edefee'}}>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
            </section>
            <section>
                <Form>
                    {['radio'].map((type) => (
                        <Form.Check
                            style={{color: '#edefee'}}
                            type={type}
                            label={`Outdoor seating`}
                            id={`${type}`}
                        />
                    ))}
                </Form>
                <Dropdown>
                    <label>Number of Diners</label>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        No. of Diners
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <Button>1 Diner</Button>
                            <Button>2 Diner</Button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            <Button>3 Diner</Button>
                            <Button>4 Diner</Button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            <Button>5 Diner</Button>
                            <Button>6 Diner</Button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                            <Button>7 Diner</Button>
                            <Button>8 Diner</Button>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                            <Button>9 Diner</Button>
                            <Button>10 Diner</Button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </section>
        </main>
    );
}

export default BookingForm;