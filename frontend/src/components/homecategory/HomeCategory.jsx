const HomeCategory = ({name, imgPath}) => {
    return ( 
        <article>
            <img src={imgPath} alt={`category${name}`}/>
            <h2>{name}</h2>
        </article>
     );
}
 
export default HomeCategory;