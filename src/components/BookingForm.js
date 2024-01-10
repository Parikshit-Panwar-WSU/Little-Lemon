import Header from './Header';
import { useState } from 'react';

const BookingForm = () => {
    const [userData, setUserData] = useState({
                                        fullName: '',
                                        email: '',
                                        mobile: '',
                                        resDate: new Date().toISOString().split('T')[0],
                                        resTime: '17:00',
                                        guests: 1,
                                        occasion: 'birthday'
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
            <Header>
                <h1 style={{color: '#f4ce14'}}>Reservations</h1>
            </Header>
            <form noValidate>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <br/>
                    <input
                        name='fullName'
                        id='fullName'
                        type='text'
                        value={userData.fullname}
                        onChange={handleChange}
                        placeholder='Enter Full Name'/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <br/>
                    <input
                        name='email'
                        id='email'
                        type='email'
                        value={userData.email}
                        onChange={handleChange}
                        placeholder='Enter valid email' />
                </div>
                <div>
                    <label htmlFor='mobile'>Mobile</label>
                    <br/>
                    <input type='text' placeholder='US: +1' disabled='true' style={{width: 55}}/>
                    <input
                        name='mobile'
                        id='mobile'
                        type='number'
                        value={userData.mobile}
                        onChange={handleChange}
                        placeholder='Enter mobile number' />
                </div>
                <div>
                    <label htmlFor='resDate'>Select Date: &nbsp;</label>
                    <input
                        name='resDate'
                        id='resDate'
                        type="date"
                        value={userData.resDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                    <label htmlFor='resTime'>Select Time: &nbsp;</label>
                    <select name='resTime' id='resTime' value={userData.resTime} onChange={handleChange}>
                        <option value='17:00'>17:00</option>
                        <option value='18:00'>18:00</option>
                        <option value='19:00'>19:00</option>
                        <option value='20:00'>20:00</option>
                        <option value='21:00'>21:00</option>
                        <option value='22:00'>22:00</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='guests'>Number of guests: </label>
                    <input
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
                    <label htmlFor='occasion'>Occasion</label>
                    <select name='occasion' id='occasion' value={userData.occasion} onChange={handleChange} >
                        <option value='birthday'>birthday</option>
                        <option value='Anniversary'>Anniversary</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default BookingForm;