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
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div className="item">
                    <h3>Social Media Links</h3>
                        <ul>
                            <li>Address</li>
                            <li>Phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>

    );
}
export default Footer;