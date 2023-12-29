import { useEffect, useState } from "react";
import AppDataTable from "./AppDataTable";

const AdminBrandList = () => {
    const [brands,setBrands] = useState();
    
    useEffect(()=>{
       fetch("http://localhost:5000/brands",{
        method:"GET"
       }).then(res => res.json())
       .then(data => {
            setBrands(data);
       })
    },[]);

    return ( <>
        <AppDataTable data={brands}/>
    </> );
}
 
export default AdminBrandList;