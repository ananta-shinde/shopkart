import { useEffect, useState } from "react";
import AppDataTable from "./AppDataTable";
import AddProductForm from "./AddProductForm";

const AdminProductList = () => {
    const [products,setproducts] =  useState();
    const [isFormActive,setFormctive] = useState(false);
    const getproducts = ()=>{
        fetch("http://localhost:5000/products",{ method:"get"})
        .then(res => res.json())
        .then(data =>{
              setproducts(data);
        })
    } 

    const handleClick = ()=>{
            setFormctive(true);
    }

    useEffect(()=>{
           getproducts();
    },[]);
    return (<>
         <button className="btn btn-success" onClick={handleClick}>Add New Product</button>
        {isFormActive && <AddProductForm/>}
        {!isFormActive && <AppDataTable data={products}/>}
    </>  );
}
 
export default AdminProductList;