import "../styles/Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="item">
                        <img src={require("../assets/images/logo1.png")} alt="little lemon logo" />

                    </div>
                    <div className="item">
                        <h3>Doormat Navigation</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Contacts</h3>
                        <ul>
                            <li>2395 Maldove Way,<br/>Chicao Illinois</li>
                            <li>(629)-243-6827</li>
                            <li>LittleLemon@restaurant.com</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Social Media Links</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    );
}
export default Footer;