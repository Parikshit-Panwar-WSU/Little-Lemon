import { useState } from "react";
import { Toast } from "react-bootstrap";
import Logo from '../Assets/lemon dessert.jpg';

const ConfirmedBooking = (props) => {
    // const [showToast, setShowToast] = useState(true);

    // const toggleToast = () => setShowToast(!showToast);

    return (
        <Toast onClose={props.toggleToast} show={props.showToast} animation={false}>
          <Toast.Header>
            <img
              src={Logo}
              className="rounded me-2"
              alt=""
              width={50}
            />
            <strong className="me-auto">Reservation Status</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Your reservation is confirmed!</Toast.Body>
        </Toast>
    );
}

export default ConfirmedBooking;