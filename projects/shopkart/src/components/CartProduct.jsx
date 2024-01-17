const CartProduct = (props) => {

    const removeProduct = (e)=>{
        const pid =   e.target.value;
        console.log(props.cart)
        let filteredCart = props.cart.filter(p=> p.id != pid);
        console.log("filtered cart :"+filteredCart)
        props.setCart([...props.cart,props.cart.filter(p=> p.id != pid)]);
        
    }
    return ( <>
        <div className="card p-4">
            <div className="d-flex justify-content-between align-items-center">
                <img width="100px" src={props.product.image_url}/>
                <h4>{props.product.name}</h4>
                <p>{props.product.price}</p>
                <button className="btn btn-sm btn-danger" onClick={removeProduct} value={props.product.id}>Remove</button>
            </div>  
            
        </div>
    </> );
}
 
export default CartProduct;