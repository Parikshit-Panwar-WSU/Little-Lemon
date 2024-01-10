import { VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const BookingForm = () => {
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const occasionOptions = ['Birthday', 'Anniversary', 'Other'];

    const [userData, setUserData] = useState({
                                        fullName: '',
                                        email: '',
                                        mobile: '',
                                        resDate: new Date().toISOString().split('T')[0],
                                        resTime: availableTimes[0],
                                        guests: 1,
                                        occasion: occasionOptions[0]
                            });

    const [errors, setErrors] = useState({
                                    nameError: false,
                                    emailError: false,
                                    mobileError: false,
                            });

    const handleChange = (event) => {
        const targetName = event.target.name;
        setUserData(prevState => {
            return {...prevState, [targetName]: event.target.value}
        });
    }

    return (
        <section style={{padding: 20, backgroundColor: '#495e57'}}>
            <form noValidate style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', width: 500}}>
                    <VStack spacing={25} align={'start'}>
                        <h1 style={{color: '#f4ce14'}}>Reservations</h1>
                        <div>
                            <label htmlFor='fullName' style={{display: 'flex', margin: 0}} className='label-text'>
                                Full Name: <p style={{marginBottom: 0, marginLeft: 230}} className='error'>Required!</p>
                            </label>
                            <Form.Control
                                name='fullName'
                                id='fullName'
                                type="text"
                                value={userData.fullName}
                                onChange={handleChange}
                                placeholder="Enter Full Name"
                                className='form-fields' />
                        </div>
                        <div>
                            <label htmlFor='email' style={{display: 'flex', margin: 0}} className='label-text'>
                                Email: <p style={{marginBottom: 0, marginLeft: 270}} className='error'>Required!</p>
                            </label>
                            <Form.Control
                                name='email'
                                id='email'
                                type='email'
                                value={userData.email}
                                onChange={handleChange}
                                placeholder='Enter valid email'
                                className='form-fields' />
                        </div>
                        <div>
                            <label htmlFor='mobile' style={{display: 'flex', margin: 0}} className='label-text'>
                                Mobile: <p style={{marginBottom: 0, marginLeft: 130}} className='error'>Required!</p>
                            </label>
                            <Form.Control
                                type='text'
                                placeholder='US: +1'
                                disabled='true'
                                style={{
                                    display: 'inline',
                                    width: 75,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 0 }}/>
                            <Form.Control
                                style={{
                                    display: 'inline',
                                    borderTopLeftRadius: 0,
                                    borderBottomLeftRadius: 0,
                                    width: 200 }}
                                name='mobile'
                                id='mobile'
                                type='text'
                                value={userData.mobile}
                                onChange={handleChange}
                                placeholder='Enter mobile number'/>
                        </div>
                        <div>
                            <label htmlFor='resDate' className='label-text'>Select Date: &nbsp;</label>
                            <Form.Control
                                style={{
                                    display: 'inline',
                                    width: 150 }}
                                name='resDate'
                                id='resDate'
                                type="date"
                                value={userData.resDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div>
                            <label htmlFor='resTime' className='label-text'>Select Time: &nbsp;</label>
                            <select name='resTime' id='resTime' style={{width: 100}} value={userData.resTime} onChange={handleChange}>
                                {availableTimes.map((times) => <option key={times} value={times}>{times}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor='guests' className='label-text'>Number of guests: &nbsp;</label>
                            <Form.Control
                                style={{
                                    display: 'inline',
                                    width: 75 }}
                                name='guests'
                                id='guests'
                                type='number'
                                value={userData.guests}
                                onChange={handleChange}
                                min='1'
                                max='10'
                                placeholder='1' />
                        </div>
                        <div>
                            <label htmlFor='occasion' className='label-text'>Occasion: &nbsp;</label>
                            <select name='occasion' id='occasion' value={userData.occasion} onChange={handleChange} >
                                {occasionOptions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
                            </select>
                        </div>
                        <Button type='submit' className='button-class' style={{width: 250}} variant="primary">Reserve a Table</Button>
                    </VStack>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;