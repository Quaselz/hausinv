import { NavLink } from "react-router-dom";
import './Nav.css';
import { userContext } from "../../Context/context";
import { useContext } from "react";

const Nav = () => {
    const {user, setUsers} = useContext(userContext);
    return ( 

            <nav>
                <div className="navLinks">
                    <NavLink className="linkNav" to="/">HOME</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/big">BIG STUFF</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/medium">NOT SO BIG STUFF</NavLink>
                    <NavLink className="linkNav" to="/categoryPage/small">SMALL STUFF</NavLink>
                    {user?.role!=="gast"?<NavLink className="linkNav" to={`/profile}`}>User</NavLink>:<></>}
                </div>
            </nav>
     );
}
export default Nav; 