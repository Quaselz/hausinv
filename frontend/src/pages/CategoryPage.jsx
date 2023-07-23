import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import "./CategoryPage.css";
import Nav from "../components/nav/Nav";
import InventoryCard from "../components/inventorycard/InventoryCard";
import axios from "axios";


const CategoryPage = () => {
    
    const [inventory, setInventory] = useState([]);
    const params = useParams();
    
    useEffect(()=>{
        const getInventory = async() => {
            const response = await axios.get("/api/inventar")
            setInventory(response.data)
        }
        getInventory();
    },[])

    const filterInventory = inventory.filter((item) => 
    item.category === params.category)


    return ( 
        <>
            <header>
                <Nav/>
            </header>

            <main>
                <section>
                    {filterInventory?.map((ele) => 
                    <InventoryCard id={ele._id} titel={ele.titel} room={ele.room} 
                    imageUrl={ele.image.url} descriptionHead={ele.descriptionHead} textfield={ele.textfield}
                    />)}

                </section>
                <section>
                    <article>
                        <p>Add something</p>
                        <img src="" alt="+" />
                        
                    </article>
                </section>
            </main>

            <footer>
                <Link to="/">
                    <img src="" alt="BackButton" />
                </Link>
            </footer>
        </>
     );
}
 
export default CategoryPage;