import { NavLink } from "react-router-dom";
import "./Nav.css"
const Nav = () => {
    return ( 
        <nav>
            <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categorypage/big">BIG STUFF</NavLink>
            <NavLink to="/categorypage/medium">NOT SO BIG STUFF</NavLink>
            <NavLink to="/categorypage/small">SMALL STUFF</NavLink>
            </div>
        </nav>
    );
}
 
export default Nav;