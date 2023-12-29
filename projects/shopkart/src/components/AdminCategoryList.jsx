import { useEffect, useState } from "react";
import AppDataTable from "./AppDataTable";

const AdminCategoryList = () => {
    const [categories,setCategories] = useState();
    
    useEffect(()=>{
       fetch("http://localhost:5000/categories",{
        method:"GET"
       }).then(res => res.json())
       .then(data => {
            setCategories(data);
       })
    },[]);

    return ( <>
        <AppDataTable data={categories}/>
    </> );
}
 
export default AdminCategoryList;