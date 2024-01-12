import { useContext, useEffect, useState } from "react";
import { userContext } from "../context";
import ProductCard from "./ProductCard";
import CartProduct from "./CartProduct";

const Cart = (props) => {
    const [products,setProducts] = useState([]);
    let url = "http://localhost:5000/products?"
    if(props.cartProducts.length != 0)
    {
        for(var i=0;i<props.cartProducts.length;i++)
        {
            if(i == 0)
            {
                url = url + `id=${props.cartProducts[i]}`
            }else{
                url = url + `&id=${props.cartProducts[i]}`
            }
            
        }
        console.log(url);
    } 
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])
    const user = useContext(userContext);
    return ( <>
    <h2>{user.name}</h2>
    <div className="container">
        <div className="row">
             <div className="col-8 p-4">
             {products.map(p=>( <CartProduct product={p}/>))}
             </div>
             <div className="col-4 p-4">
                <div className="card p-4">
                    <h4 className="text-muted">Summary : </h4>
                    <hr/>
                    <p>Sub total : 20000</p>
                    <p>GST : 180</p>
                    <hr/>
                    <p>Total : 20180</p>
                </div>
             </div>
        </div>
    </div>
    
    </> );
}
 
export default Cart;