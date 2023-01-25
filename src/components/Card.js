import "../styles/Main.css";

const Card = (props) => {

        return (
                <div className="card-container">
                    <div className="items">
                        <img src={props.image} alt="item in special" />
                        <div className="header">
                            <h3>{props.name}</h3>
                            <span className="price">{props.price}</span>
                        </div>
                        <p>{props.description}</p>
                        <div style={{marginTop: "auto", marginBottom: "25px", display: "flex"}}>
                            <span href="/" type="button" className="order">Order for delivery</span>
                            <i class="fa-solid fa-truck"></i>
                        </div>
                    </div>
                </div>
        );
}
export default Card;