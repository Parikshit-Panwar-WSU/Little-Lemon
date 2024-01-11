import { useReducer} from "react";
import BookingForm from "./BookingForm";

// This is a reducer function.
const updateTimes = (state, action) => {
    return state;
}

const BookingPage = () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

    return (
        <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch} />
    );
}

export default BookingPage;