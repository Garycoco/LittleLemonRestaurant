import "../styles/Main.css";
import food from "../assets/images/restauranfood.jpg";

const Hero = () => {
    return (
    <div className="hero-container">
        <div className="desc-container">
            <div className="left">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <a className="btn" type="button">Reserve a Table</a>
            </div>
            <div className="right">
                <img src={food} alt="restaurantfood" />
            </div>
        </div>
    </div>

    );
}
export default Hero;