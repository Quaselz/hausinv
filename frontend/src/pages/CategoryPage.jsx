import { useEffect, useState } from "react";
import "./CategoryPage.css"
import InventoryCard from "../components/inventorycard/InventoryCard";
import Nav from "../components/nav/Nav";
import axios from "axios";
import { useParams } from "react-router-dom";

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
 
    const filterInventory = inventory.filter((item)=>  item.category === params.category)

    return (
        <>
        <header>
            <Nav />
        </header> 
        <main>
            <section>
                {filterInventory?.map((ele) => <InventoryCard id={ele._id} titel={ele.titel} room={ele.room} imageUrl={ele.image.url} descriptionHead={ele.descriptionHead} textfield={ele.textfield}/>)}
            </section>
            <section>
                <article><p>Add something</p><img src="" alt=""/></article>

            </section>
        </main>
        <footer>
            <Link to="/">
                <img src="" alt="<-"/>
            </Link>
        </footer>
    </>

     );
}
 
export default CategoryPage;