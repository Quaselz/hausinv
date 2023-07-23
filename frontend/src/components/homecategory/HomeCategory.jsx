import "./HomeCategory.css";

const HomeCategory = ({name, imgPath}) => {
    return ( 
        <article className="HomeInventoryCard">
            <img src={imgPath} alt={`category: ${name}`} />
            <h3>
                {name}
            </h3>
        </article>
     );
}
 
export default HomeCategory;