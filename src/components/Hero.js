import "../styles/Main.css";
import salad from "../assets/images/salad.jpg";

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
            </div>
        </div>
    </div>

    );
}
export default Hero;