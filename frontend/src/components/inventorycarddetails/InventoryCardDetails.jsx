import "./InventoryCardDetails.css";
import { Link } from "react-router-dom";

const InventoryCardDetails = ({id, titel, room, imageUrl, descriptionHead, textfield}) => {
    return ( 
        <article>

            <div>
                <img src={imageUrl} alt={titel} />
                <Link to="">Edit</Link>
            </div>
            <div>
                <div>
                    <h3>{titel}</h3>
                    <Link to="">Edit</Link>
                </div>
                <div>
                    <h5>{room}</h5>
                    <Link to="">Edit</Link>
                </div>
                <div>
                    <h4>{descriptionHead}</h4>
                    <Link to="">Edit</Link>
                </div>
                <div>
                    <p>{textfield}</p>
                    <Link to="">Edit</Link>
                </div>
            </div>
        </article>
     );
}
 
export default InventoryCardDetails;
