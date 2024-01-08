const ProductCard = (props) => {
    return ( <>
       <div className="card">
        <img src={props.product.image_url}/>
        <h4>{props.product.name}</h4>
        <p>MRP : {props.product.price}</p>
       </div>
    </> );
}
 
export default ProductCard;