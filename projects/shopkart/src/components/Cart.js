import { useContext } from "react";
import { userContext } from "../context";

const Cart = (props) => {
    const user = useContext(userContext);
    return ( <>
    <h2>{user.name}</h2>
    <p>{JSON.stringify(props.cartProducts)}</p>
    </> );
}
 
export default Cart;