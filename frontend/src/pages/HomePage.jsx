import { NavLink } from "react-router-dom";
import HomeCategory from "../components/homecategory/HomeCategory";
import Nav from "../components/nav/Nav";
import "./HomePage.css";
import bigStuff from "../assets/images/big.jpeg";
import middelStuff from "../assets/images/middel2.jpeg";
import smallStuff from "../assets/images/small_stuff.jpeg";

const HomePage = () => {
    return ( 
        <>
            <header>
                <Nav/>
                <div>
                    <h1 className="headline">My Furniture</h1>
                </div>
            </header>

            <main>
                <section className="categoryLinksContainer">
                    <NavLink to="/categoryPage/big"><HomeCategory name="big stuff" imgPath="" /> { <img src={bigStuff} alt="big stuff" /> } </NavLink> 
                    <NavLink to="/categoryPage/medium"><HomeCategory name="not so big stuff" imgPath=""/> <img src={middelStuff} alt="not so big stuff" /> </NavLink> 
                    <NavLink to="/categoryPage/small"><HomeCategory name="small stuff" imgPath=""/> <img src={smallStuff} alt="small stuff" /> </NavLink>
                </section>
            </main>

            <footer>
                
            </footer>
        </>
     );
}
 
export default HomePage;