const CartProduct = (props) => {
    return ( <>
        <div className="card p-4">
            <div className="d-flex justify-content-between align-items-center">
                <img width="100px" src={props.product.image_url}/>
                <h4>{props.product.name}</h4>
                <p>{props.product.price}</p>
                <button className="btn btn-sm btn-danger">Remove</button>
            </div>  
            
        </div>
    </> );
}
 
export default CartProduct;