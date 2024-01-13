import { VStack } from '@chakra-ui/react';
import { useState} from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ConfirmedBooking from './ConfirmedBooking';

const BookingForm = (props) => {
    const occasionOptions = ['Birthday', 'Anniversary', 'Other'];

    const [userData, setUserData] = useState({
                                        fullName: '',
                                        email: '',
                                        mobile: '',
                                        resDate: new Date().toISOString().split('T')[0],
                                        resTime: props.availableTimes[0],
                                        guests: 1,
                                        occasion: occasionOptions[0]
                            });

    const [errors, setErrors] = useState({
                                    nameError: false,
                                    emailError: false,
                                    mobileError: false,
                            });

    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    const handleChange = (event) => {
        const targetName = event.target.name;
        if (targetName === 'resDate')
            props.dispatch({type: event.target.value});
        setUserData(prevState => {
            return {...prevState, [targetName]: event.target.value}
        });
    }

    const checkEmail = (emailID) => {
        const testExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return testExpression.test(String(emailID).toLowerCase());
    }

    const handleSubmit = (event) => {
        console.log('Handling submission!');
        event.preventDefault();

        // check validity.
        let isNameValid = userData.fullName.length > 0;
        let isEmailValid = checkEmail(userData.email);
        let isMobileValid = userData.mobile.length === 10;

        // If no error exists.
        if (isNameValid && isEmailValid && isMobileValid) {
            setErrors(prevState => {
                return {...prevState,
                        nameError: !isNameValid,
                        emailError: !isEmailValid,
                        mobileError: !isMobileValid }
            });

            setShowToast(true);
            setUserData(prevState => {
                return {...prevState,
                    fullName: '',
                    email: '',
                    mobile: '',
                    resDate: new Date().toISOString().split('T')[0],
                    resTime: props.availableTimes[0],
                    guests: 1,
                    occasion: occasionOptions[0]}
            });

            let bookingData = {...userData};
            props.submitForm(bookingData);
        }
        else {  // If any of the above error exists.
            setErrors(prevState => {
                return {...prevState,
                        nameError: !isNameValid,
                        emailError: !isEmailValid,
                        mobileError: !isMobileValid }
            });

            setShowToast(false);
        }
    }

    return (
        <section style={{padding: 20, backgroundColor: '#495e57'}}>
            <form noValidate onSubmit={handleSubmit} style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{display: 'flex', width: 500}}>
                    <VStack spacing={25} align={'start'}>
                        <h1 style={{color: '#f4ce14'}}>Reservations</h1>
                        <ConfirmedBooking
                            showToast={showToast}
                            toggleToast={toggleToast} />
                        <div>
                            <label htmlFor='fullName' style={{display: 'flex', margin: 0}} className='label-text'>
                                Full Name:
                                { errors.nameError ?
                                    <p style={{marginBottom: 0, marginLeft: 130}}
                                        className='error'
                                        data-testid='fullNameError'>
                                            Please enter you name!</p>
                                    : ""
                                }
                            </label>
                            <Form.Control
                                name='fullName'
                                id='fullName'
                                type="text"
                                value={userData.fullName}
                                onChange={handleChange}
                                data-testid='fullName'
                                placeholder="Enter Full Name"
                                className='form-fields' />
                        </div>
                        <div>
                            <label htmlFor='email' style={{display: 'flex', margin: 0}} className='label-text'>
                                Email:
                                { errors.emailError ?
                                    <p style={{marginBottom: 0, marginLeft: 160}}
                                    className='error'
                                    data-testid='emailError'>
                                    Please enter valid email!</p>
                                    : ""
                                }
                            </label>
                            <Form.Control
                                name='email'
                                id='email'
                                type='email'
                                value={userData.email}
                                onChange={handleChange}
                                data-testid='email'
                                placeholder='Enter valid email'
                                className='form-fields' />
                        </div>
                        <div>
                            <label htmlFor='mobile' style={{display: 'flex', margin: 0}} className='label-text'>
                                Mobile:
                                { errors.mobileError ? <p style={{marginBottom: 0, marginLeft: 50}}
                                    className='error'
                                    data-testid='mobileError'>
                                    Please enter a valid mobile!</p>
                                    : ""
                                }
                            </label>
                            <Form.Control
                                type='text'
                                placeholder='US: +1'
                                disabled={true}
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
                                data-testid='mobile'
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
                                data-testid='resDate'
                                value={userData.resDate}
                                onChange={handleChange}
                                min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div>
                            <label htmlFor='resTime' className='label-text'>Select Time: &nbsp;</label>
                            <select
                                name='resTime'
                                id='resTime'
                                data-testid='resTime'
                                style={{width: 100}}
                                value={userData.resTime}
                                onChange={handleChange}>
                                {props.availableTimes.map((times) => <option key={times} value={times}>{times}</option>)}
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
                                data-testid='guests'
                                placeholder='1' />
                        </div>
                        <div>
                            <label htmlFor='occasion' className='label-text'>Occasion: &nbsp;</label>
                            <select
                                name='occasion'
                                id='occasion'
                                data-testid='occasion'
                                value={userData.occasion}
                                onChange={handleChange} >
                                {occasionOptions.map((occasion) => <option key={occasion} value={occasion}>{occasion}</option>)}
                            </select>
                        </div>
                        <Button
                            type='submit'
                            className='button-class'
                            style={{width: 250}}
                            data-testid='submitBtn'
                            aria-label='On Click'
                            variant="primary">
                                Reserve a Table
                        </Button>
                    </VStack>
                </div>
            </form>
        </section>
    );
}

export default BookingForm;