import "../styles/Main.css";
import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import About from "./About";


const Main = () => {
    return (
        <>
            <main>
                <Hero />
                <Specials />
                <CustomersSay />
                <About />
            </main>
        </>
    );
}
export default Main;