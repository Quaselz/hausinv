import "./PopUp.css"

const PopUp = () => {
    return ( 
        <div>
            <img src="" alt="x"/>
            <form>
                <h2>ADD NEW ITEM</h2>
                <div>
                    <label htmlFor="titel">TITEL</label>
                    <input type="text" placeholder="TITEL" name="titel" id="titel" />
                </div>
                <div>
                    <label htmlFor="room">ROOM</label>
                    <input type="text" placeholder="ROOM" name="room" id="room" />
                </div>
                <div>
                    <label htmlFor="image">IMAGE</label>
                    <input type="file" placeholder="IMAGE" name="image" id="image" />
                </div>
                <div>
                    <label htmlFor="">ADD DESCRIPTION</label>
                    <input type="text" placeholder="ADD DESCRIPTION" name="descriptionHead" id="descriptionHead" />
                </div>
                <div>
                    <label htmlFor="textfield">ADD TEXT</label>
                    <input type="textfield" name="textfield" placeholder="ADD TEXT" id="textfield" />
                </div>
                <button type="submit">PUBLISH</button>
            </form>
        </div>
     );
}
 
export default PopUp;