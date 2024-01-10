import { useContext, useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import {userContext} from "../context"

const Home = (props) => {
    const [products,setProduct] = useState([]);
    const [categoryFilter,setCategoryFilter] = useState(0);
    const navigate =  useNavigate();
    const user = useContext(userContext);
    useEffect(()=>{
        let url = `http://localhost:5000/products?categoryId=${categoryFilter}`
        if(categoryFilter == 0)
        {
            url = `http://localhost:5000/products`
        }
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })   
    },[categoryFilter])

    const handleCategoryFilter = (e)=>{
            setCategoryFilter(e.target.value);
    }

    const logout = ()=>
    {
        props.setUser({});
        props.setLoggedIn(false);
        navigate("/login"); 
    }
    return ( <>
    <div className="container">
        <p>Welcome {user.name}</p>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
        <Link to="/cart" className="btn btn-info">View Cart</Link>
        <ul className="list-unstyled d-flex justify-content-around p-4">
            <li onClick={handleCategoryFilter} id="mobiles" value={0}>All</li>
            <li onClick={handleCategoryFilter} id="mobiles" value={1}>Mobiles</li>
            <li onClick={handleCategoryFilter} id="tabs" value={3}>Tabs</li>
            <li onClick={handleCategoryFilter} id="laptops" value={2}>Laptops</li>
        </ul>
        <div className="d-flex">
            {
            products.map(p=>(<ProductCard product={p} setCart={props.setCart} cart={props.cart}/>))
        }
        </div>
    </div>
       
    </> );
}
export default Home;