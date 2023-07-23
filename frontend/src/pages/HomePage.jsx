import { NavLink } from "react-router-dom";
import HomeCategory from "../components/homecategory/HomeCategory";
import Nav from "../components/nav/Nav";
import "./HomePage.css"

const HomePage = () => {
    return ( 
        <>
        <header>
            <Nav />
            <h1>My Furniture</h1>
        </header> 
        <main>
            <section>
                <NavLink to="/categorypage/big"><HomeCategory name="big stuff" imgPath=""/></NavLink>
                <NavLink to="/categorypage/medium"><HomeCategory name="not so big stuff" imgPath=""/></NavLink>
                <NavLink to="/categorypage/small"><HomeCategory name="small stuff" imgPath=""/></NavLink>
            </section>
        </main>
        <footer>

        </footer>
    </>
    );
}
 
export default HomePage;