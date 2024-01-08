import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const [products,setProduct] = useState([]);
    const [categoryFilter,setCategoryFilter] = useState(0);
    useEffect(()=>{
        fetch(`http://localhost:5000/products?categoryId=${categoryFilter}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        })   
    },[categoryFilter])

    const handleCategoryFilter = (e)=>{
            setCategoryFilter(e.target.value);
    }
    return ( <>
    <div className="container">
        <ul className="list-unstyled d-flex justify-content-around p-4">
            <li onClick={handleCategoryFilter} id="mobiles" value={1}>Mobiles</li>
            <li onClick={handleCategoryFilter} id="tabs" value={3}>Tabs</li>
            <li onClick={handleCategoryFilter} id="laptops" value={2}>Laptops</li>
        </ul>
        <div className="d-flex">
            {
            products.map(p=>(<ProductCard product={p}/>))
        }
        </div>
    </div>
       
    </> );
}
export default Home;