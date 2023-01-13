import Card from "./Card";
import Data from "./Data";

const Specials = () => {
    const data = Data.map((item, index) => {
        return (
            <Card key={index} name={item.title} price={item.price} description={item.description} image={item.image} />
        );
    })
    return (
        <>
            <div className="specials-top" id="specials">
                <h2>This Weeks specials!</h2>
                <button type="button" className="btn">Online Menu</button>
            </div>
            <div className="specials-bottom">
                {data}
            </div>
        </>
    );
}
export default Specials;