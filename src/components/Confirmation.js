import Image from '../assets/images/restauranfood.jpg';
import {Link} from 'react-router-dom';


export default function Confirmation() {
    return (
        <div>
            <div style={{height: "90px"}}></div>
            <img src={Image} alt="Little Lemon Ingredients" style={{maxHeight: "300px", width: "100%", objectFit: "cover", objectPosition: "center"}}></img>
            <div style={{margin: "1rem 2rem"}}>
                <h2>Your Reservation is Confirmed!</h2>
                <h4 style={{marginTop: "20px"}}>A confirmation message has been sent to your email.</h4>
                <h4>Thanks for dining with us!</h4>
                <div style={{margin: "40px 0"}}>
                    <Link style={{ marginRight: "20px" }} className="btn" to="/order">Order Online</Link>
                    <Link className="btn" to="/" >Home Page</Link>
                </div>
            </div>
        </div>
    );
}