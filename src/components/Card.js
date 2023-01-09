import "../styles/Main.css";

const Card = (props) => {

        return (
                <div className="card-container">
                    <div className="items">
                        <img src={props.image} alt="image of item in special" />
                        <div className="header">
                            <h3>{props.name}</h3>
                            <span className="price">{props.price}</span>
                        </div>
                        <p>{props.description}</p>
                        <a href="#" type="button">Order for delivery</a>
                    </div>
                </div>
        );
}
export default Card;