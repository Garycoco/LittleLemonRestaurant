import "../styles/Main.css";
import food from "../assets/images/restauranfood.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="desc-container">
                <div className="left">
                    <div style={{ height: "100px" }}></div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <Link className="btn" to="/booking">Reserve a Table</Link>
                </div>
                <div className="right">
                    <img src={food} alt="restaurantfood" />
                </div>
            </div>
        </div>

    );
}
export default Hero;