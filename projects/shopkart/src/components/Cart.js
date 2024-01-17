import { useContext, useEffect, useState } from "react";
import { userContext } from "../context";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const Cart = (props) => {
    const [cartTotal,setCartTotal] = useState(0);
    let url = ""
    if(props.cart.length != 0)
    {
        url = "http://localhost:5000/products?"
        for(var i=0;i<props.cart.length;i++)
        {
            if(i == 0)
            {
                url = url + `id=${props.cart[i]}`
            }else{
                url = url + `&id=${props.cart[i]}`
            }
            
        }
        console.log(url);
    } 
    useEffect(()=>{ 
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
                props.setcartProducts(data)
                calulateCartValue();
        })
    },[props.cartProducts])
    const user = useContext(userContext);

    const calulateCartValue = ()=>{
        var total = 0;
       for(var i=0;i<props.cartProducts.length;i++)
       {
          total = total + props.cartProducts[i].price;   
       }
       setCartTotal(total);
    }
    return ( <>
    <h2>{user.name}</h2>
    <div className="container">
       { props.cartProducts.length ? <div className="row">
             <div className="col-8 p-4">
             {props.cartProducts.map(p=>( <CartProduct cart={props.cart} setCart={props.setCart} product={p}/>))}
             </div>
             <div className="col-4 p-4">
                <div className="card p-4">
                    <h4 className="text-muted">Summary : </h4>
                    <hr/>
                    <p>Sub total : {cartTotal}</p>
                    <p>GST : {18*cartTotal/100}</p>
                    <hr/>
                    <p className="display-6">Total :  {cartTotal + 18*cartTotal/100}</p>
                    <Link className="btn btn-success" to="/checkout">Checkout</Link>
                </div>
             </div>
        </div> : 
        <div className="text-center">
        <h2 className="p-4">Your cart is empty</h2>
        <Link className="btn btn-info" to="/">Keep shoping</Link>
        </div>
}
    </div>
    
    </> );
}
 
export default Cart;