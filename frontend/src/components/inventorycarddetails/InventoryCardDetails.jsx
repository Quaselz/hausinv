import { useEffect, useState } from "react";
import "./InventoryCardDetails.css";
import axios from "axios"

const InventoryCardDetails = ({id, titel, room, imageUrl, descriptionHead, textfield, setRefresh}) => {
    const [imageForm, setImgForm] = useState(true)
    const [titelForm, setTitelForm] = useState(true)
    const [roomForm, setRoomForm] = useState(true)
    const [descriptionHeadForm, setDescriptionHeadForm] = useState(true)
    const [textfieldForm, setTextfieldForm] = useState(true)

    const updateInv = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const response = await axios.put(`/api/inventar/${id}`, formData)
        setImgForm(true)
        setTitelForm(true)
        setRoomForm(true)
        setDescriptionHeadForm(true)
        setTextfieldForm(true)
        setRefresh(prev => !prev)
        
        e.target.reset();
    }


    return ( 
        <>{id?
        <article className="InventoryCardDetailsContainer">
            <form className="InventoryDetailsForm" onSubmit={updateInv}>
            <div className="ICD-img-container">
                <label htmlFor="image"><img src={imageUrl} alt={titel} /></label>
                <div className="imgInputDiv">
                    <input type="file" name="image" className={imageForm?"hideMe imgInput":" imgInput"} placeholder={imageUrl} id="image"/>

                    <button className="imgBtn" type="button" onClick={() => {setImgForm(prev => !prev)}}>Edit</button>
                </div>
            </div>
            <div className="ICD-text-container">
                <div className="ICD-text-edit">
                    <label className={titelForm?"":"hideMe"} htmlFor="titel"><h3>{titel}</h3></label>

                    <input type="text" name="titel" className={titelForm?"hideMe titelInput":" titelInput"} placeholder={titel} id="titel" defaultValue={titel}/>

                    <button type="button" onClick={() => {setTitelForm(prev => !prev)}}>Edit</button>
                </div>
                 <div className="ICD-text-edit">
                    <label className={roomForm?"":"hideMe"} htmlFor="room"><h5>{room}</h5></label>

                    <input type="text" name="room" className={roomForm?"hideMe roomInput":" roomInput"} placeholder={room} id="room" defaultValue={room}/>

                    <button type="button" onClick={() => {setRoomForm(prev => !prev)}}>Edit</button>
                </div>
                <div className="ICD-text-edit">
                    <label className={descriptionHeadForm?"":"hideMe"} htmlFor="descriptionHead"><h4>{descriptionHead}</h4></label>
                    <input type="text" name="descriptionHead" className={descriptionHeadForm?"hideMe descriptionHeadInput":" descriptionHeadInput"} placeholder={descriptionHead} id="descriptionHead" defaultValue={descriptionHead}/>
                    <button type="button" onClick={() => {setDescriptionHeadForm(prev => !prev)}}>Edit</button>
                </div>
                <div className="ICD-text-edit">

                    <label className={textfieldForm?"":"hideMe"} htmlFor="textfield"><p>{textfield}</p></label>
                    <textarea type="textarea" name="textfield" className={textfieldForm?"hideMe textfieldInput":" textfieldInput"} placeholder={textfield} id="textfield" defaultValue={textfield}/>

                    <button type="button" onClick={() => {setTextfieldForm(prev => !prev)}}>Edit</button>
                </div> 
            <button className="updateBtn" type="submit">Update Me</button>
            </div>
            </form>
        </article>:<></>
        }
        </>
     );
}
 
export default InventoryCardDetails;