const ProductCard = (props) => {
    const addToCart = (e)=>
    {
         props.setCart([...props.cart,e.target.value])
    }
    return ( <>
       <div className="card">
        <img src={props.product.image_url}/>
        <h4>{props.product.name}</h4>
        <p>MRP : {props.product.price}</p>
        <button className="btn btn-sm btn-primary" value={props.product.id} onClick={addToCart}>Add To Cart</button>
       </div>
    </> );
}
 
export default ProductCard;