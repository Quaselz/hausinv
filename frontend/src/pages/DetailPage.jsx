import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./DetailPage.css";
import Nav from "../components/nav/Nav";
import InventoryCardDetails from "../components/inventorycarddetails/InventoryCardDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
    
    const [inventoryItem, setInventoryItem] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(true)

    useEffect(()=>{
        const getInventoryItem = async() => {
            const response = await axios.get(`/api/inventar/${params.id}`)
            setInventoryItem(response.data)
        }
        getInventoryItem();
    },[refresh])


    
    return ( 
        <>
            <header>
                <Nav/>
            </header>

            <main>
                <section>
                    <InventoryCardDetails id={inventoryItem._id} titel={inventoryItem.titel} room={inventoryItem.room} 
                    imageUrl={inventoryItem.image?.url} descriptionHead={inventoryItem.descriptionHead} textfield={inventoryItem.textfield} setRefresh={setRefresh}/>
                </section>
            </main>

            <footer> 
                <div onClick={() => navigate(-1)} className="backarrow">
                        <span></span>
                </div>
            </footer>
        </>
     );
}
 
export default DetailPage;