import "./PopUp.css";

const PopUp = () => {
    return ( 
        <div>
            <img src="" alt="X" />
            <form action="">
                <h2>ADD NEW ITEM</h2>
                <div>
                    <label htmlFor="titel">TITEL</label>
                    <input type="text" placeholder="TITEL" id="titel"/>
                </div>
                <div>
                    <label htmlFor="room">ROOM</label>
                    <input type="text" placeholder="ROOM" id="room"/>
                </div>
                <div>
                    <label htmlFor="image">IMAGE</label>
                    <input type="text" placeholder="IMAGE" id="image"/>
                </div>
                <div>
                    <label htmlFor="descriptionHead">ADD DESCRIPTION</label>
                    <input type="text" placeholder="ADD DESCRIPTION" id="descriptionHead"/>
                </div>
                <div>
                    <label htmlFor="textfield">ADD TEXT</label>
                    <input type="text" placeholder="ADD TEXT" id="textfield"/>
                </div>
                <button type="submit">PUBLISH</button>
            </form>
        </div>
    );
}
 
export default PopUp;