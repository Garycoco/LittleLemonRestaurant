const CustomersSay = () => {

    return (
        <div className="customers-say">
            <h3>Testimonials</h3>
            <div className="testimonials">
                <div className="customers">
                    <h4>Jennifer Zod</h4>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: "80px", display: "block", margin: "10px 10px 10px 0"}} src={require("../assets/images/person4.jpg")} alt="customer"/>
                        <p>Absolutely incredible.</p>
                    </div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked" ></span>
                    <span class="fa fa-star"></span>
                </div>
                <div className="customers">
                    <h4>Zoe Cloth</h4>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: "80px", display: "block", margin: "10px 10px 10px 0"}} src={require("../assets/images/person3.jpg")} alt="customer"/>
                        <p>I totally recommend this place.</p>
                    </div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div className="customers">
                    <h4>John Craig</h4>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: "80px", display: "block", margin: "10px 10px 10px 0"}} src={require("../assets/images/person2.jpg")} alt="customer"/>
                        <p>The best there ever is.</p>
                    </div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                </div>
                <div className="customers">
                    <h4>Tiffany Melod</h4>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img style={{height: "80px", display: "block", margin: "10px 10px 10px 0"}} src={require("../assets/images/person1.jpg")} alt="customer"/>
                        <p>Delicious food, best service.</p>
                    </div>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
            </div>
        </div>
    );
}

export default CustomersSay;