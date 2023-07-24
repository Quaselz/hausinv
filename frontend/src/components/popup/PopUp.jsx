import "./PopUp.css";
import axios from "axios";

const PopUp = ({setRefresh, category}) => {
    
    const createNewInv = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        formData.set("category", category)
        const response = await axios.post("/api/inventar/image", formData)
        setRefresh(prev => !prev)
        console.log(response);
        e.target.reset()
    }
    
    return ( 
        <div>
            <img src="" alt="X" />
            <form onSubmit={createNewInv}>
                <h2>ADD NEW ITEM</h2>
                <div>
                    <label htmlFor="titel">TITEL</label>
                    <input type="text" name="titel" placeholder="TITEL" id="titel"/>
                </div>
                <div>
                    <label htmlFor="room">ROOM</label>
                    <input type="text" name="room" placeholder="ROOM" id="room"/>
                </div>
                <div>
                    <label htmlFor="image">IMAGE</label>
                    <input type="file" name="image" placeholder="IMAGE" id="image"/>
                </div>
                <div>
                    <label htmlFor="descriptionHead">ADD DESCRIPTION</label>
                    <input type="text" name="descriptionHead" placeholder="ADD DESCRIPTION" id="descriptionHead"/>
                </div>
                <div>
                    <label htmlFor="textfield">ADD TEXT</label>
                    <input type="text" name="textfield" placeholder="ADD TEXT" id="textfield"/>
                </div>
                <button type="submit">PUBLISH</button>
            </form>
        </div>
    );
}
 
export default PopUp;