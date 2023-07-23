import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {

    return ( 

            <nav>
                <div className="navLinks">
                    <NavLink className="linkNav" to="/">HOME</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/big">BIG STUFF</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/medium">NOT SO BIG STUFF</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/small">SMALL STUFF</NavLink>
                </div>
            </nav>

     );
}
export default Nav; 