import Nav from "../../components/nav/Nav";
import "./LoginPage.css"
const LoginPage = () => {
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
                <NavLink to="/categoryPage/big"><HomeCategory name="big stuff" imgPath={bigStuff} /> </NavLink> 
                <NavLink to="/categoryPage/medium"><HomeCategory name="not so big stuff" imgPath={middelStuff}/> </NavLink> 
                <NavLink to="/categoryPage/small"><HomeCategory name="small stuff" imgPath={smallStuff} /> </NavLink>
            </section>
        </main>

        <footer>
            
        </footer>
    </>

     );
}
 
export default LoginPage;