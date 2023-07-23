import { NavLink } from "react-router-dom";
import HomeCategory from "../components/homecategory/HomeCategory";
import Nav from "../components/nav/Nav";
import "./HomePage.css";

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
                    <NavLink to="/categoryPage/big"><HomeCategory name="big stuff" imgPath=""/> </NavLink> 
                    <NavLink to="/categoryPage/medium"><HomeCategory name="not so big stuff" imgPath=""/></NavLink> 
                    <NavLink to="/categoryPage/small"><HomeCategory name="small stuff" imgPath=""/></NavLink>
                </section>
            </main>

            <footer>
                
            </footer>
        </>
     );
}
 
export default HomePage;