import Image from "../assets/images/mario_and_adrian1.jpg";
import Image1 from "../assets/images/mario_and_adrian2.jpg";


const About = () => {

    return (
        <div className="about-container" id="about">
            <div className="about-left">
                <h2>Little Lemon</h2>
                <h3 style={{ margin: "1rem 0" }}>Chicago</h3>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
                Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, 
                and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </div>
            <div className="about-right">
                <div style={{width: "100%", alignItems: "center", marginLeft: "20px"}}>
                    <img style={{width: "200px", height: "250px", borderRadius: "20px", top: "30px"}} src={Image} alt="mario and adrian" />
                    <img style={{width: "200px", height: "250px", position: "relative", borderRadius: "20px", right: "20px", bottom: "40px"}} src={Image1} alt="mario and adrian" />
                </div>
            </div>
        </div>
    );
}
export default About;