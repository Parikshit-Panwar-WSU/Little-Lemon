import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

// This is a reducer function.
const updateTimes = (state, action) => {
    fetch(action.type).then(res => console.log(res));
    return state;
}

const BookingPage = () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    useEffect(() => {
        const todaysDate = new Date().toISOString().split('T')[0];
        fetch(todaysDate).then(res => console.log(res));
    }, []);

    const submitForm = (bookingData) => {
        // const canSubmit = submitAPI(bookingData);
        const canSubmit = true;
        if (canSubmit) {
            // Navigate to booking confirmation page.
            console.log('Booking Confirmed!');
        }
    }

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm} />
    );
}

export default BookingPage;