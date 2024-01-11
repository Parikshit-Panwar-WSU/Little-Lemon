import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";

// This is a reducer function.
const updateTimes = (state, action) => {
    fetch(action.type).then(res => console.log(res));
    return state;
}

const BookingPage = () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    useEffect(() => {
        const todaysDate = new Date().toISOString().split('T')[0];
        fetch(todaysDate).then(res => console.log(res));
    }, []);

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch} />
    );
}

export default BookingPage;