import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import "./CategoryPage.css";
import Nav from "../components/nav/Nav";
import InventoryCard from "../components/inventorycard/InventoryCard";
import axios from "axios";
import PopUp from "../components/popup/PopUp";



const CategoryPage = () => {
    
    const [inventory, setInventory] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const params = useParams();
    const [popup, setPopup] = useState(true)
    
    useEffect(()=>{
        const getInventory = async() => {
            const response = await axios.get("/api/inventar")
            setInventory(response.data)
        }
        getInventory();
    },[refresh])

    const filterInventory = inventory.filter((item) => 
    item.category === params.category)


    return ( 
        <>
            <header>
                <Nav/>
            </header>

            <main className="categoryPage-main">
                <section>
                    {filterInventory?.map((ele) => 
                    <InventoryCard key={ele._id} id={ele._id} titel={ele.titel} room={ele.room} 
                    imageUrl={ele.image.url} descriptionHead={ele.descriptionHead} textfield={ele.textfield}
                    />)}

                </section>
                    <section className="addSomething-section">
                        <div onClick={() => {setPopup(false)}}> 
                            <p>Add something</p>
                            <span className="plus"></span>
                        </div>
                    </section>
                <section className={popup?"hideMe popup-section":"popup-section"}>
                        <PopUp popup={popup} setRefresh={setRefresh} setPopup={setPopup} category={params.category}/>
                </section>
            </main>

            <footer>

                <Link to="/">
                    <div className="backarrow">
                        <span></span>
                    </div>
                </Link>
            </footer>
        </>
     );
}
 
export default CategoryPage;