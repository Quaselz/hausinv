import { NavLink } from "react-router-dom";
import "./InventoryCard.css";

const InventoryCard = ({id, titel, room, imageUrl, descriptionHead, textfield}) => {
    return ( 
        <article className="InventoryCardContainer">
            <div className="InventoryCardImg">
                <img src={imageUrl} alt={titel} />
            </div>
            <div className="InventoryCardText">
                <h3>{titel}</h3>
                <h5>{room}</h5>
                <h4>{descriptionHead}</h4>
                <p>{textfield}</p>
                <NavLink className="button" to={`/detailPage/${id}`}>Edit</NavLink>
            </div>
        </article>
     );
}
 
export default InventoryCard;