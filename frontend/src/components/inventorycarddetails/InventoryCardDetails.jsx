import "./InventoryCardDetails.css";
import { Link } from "react-router-dom";

const InventoryCardDetails = ({id, titel, room, imageUrl, descriptionHead, textfield}) => {
    return ( 
        <article className="InventoryCardDetailsContainer">
            
            <div className="ICD-img-container">
                <img src={imageUrl} alt={titel} />
                <Link to="">Edit</Link>
            </div>
            <div className="ICD-text-container">
                <div className="ICD-text-edit">
                    <h3>{titel}</h3>
                    <Link to="">Edit</Link>
                </div>
                <div className="ICD-text-edit">
                    <h5>{room}</h5>
                    <Link to="">Edit</Link>
                </div>
                <div className="ICD-text-edit">
                    <h4>{descriptionHead}</h4>
                    <Link to="">Edit</Link>
                </div>
                <div className="ICD-text-edit">
                    <p>{textfield}</p>
                    <Link to="">Edit</Link>
                </div>
                
            </div>
        </article>
     );
}
 
export default InventoryCardDetails;