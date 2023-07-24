import "./PopUp.css";
import axios from "axios";
const PopUp = ({setRefresh, category, setPopup, popup}) => {

    const createNewInv = async(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.set("category", category)
        console.log(formData);
        const response = await axios.post("/api/inventar/image", formData)
        setRefresh(prev => !prev)

        e.target.reset()
    }
    return ( 
        <div className={popup?"hideMe popup":"popup"}>
            <div>
            
            <form onSubmit={createNewInv}>
                <div>

                <h2>ADD NEW ITEM</h2>
                <span className="cross" onClick={() => {setPopup(true)}}></span>
                </div>
                <div>
                    <input type="text" name="titel" placeholder="TITEL" id="titel"/>
                    <label htmlFor="titel">TITEL</label>
                </div>
                <div>
                    <input type="text" name="room" placeholder="ROOM" id="room"/>
                    <label htmlFor="room">ROOM</label>
                </div>
                <div>
                    <input type="file" name="image" placeholder="IMAGE" id="image"/>
                    <label htmlFor="image">IMAGE</label>
                </div>
                <div>
                    <input type="text" name="descriptionHead" placeholder="ADD DESCRIPTION" id="descriptionHead"/>
                    <label htmlFor="descriptionHead">ADD DESCRIPTION</label>
                </div>
                <div>
                    <input type="text" name="textfield" placeholder="ADD TEXT" id="textfield"/>
                    <label htmlFor="textfield">ADD TEXT</label>
                </div>
                <button type="submit">PUBLISH</button>
            </form>
            </div>
        </div>
    );
}
 
export default PopUp;