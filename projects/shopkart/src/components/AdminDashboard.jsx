import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";
import AddCategoryForm from "./AddCategoryForm";
import AddBrandForm from "./AddBrandForm";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";

const AdminDashboard = () => {
    const [activeMenu,setActiveMenu] = useState("product-list");

    const handleClick = (e)=>{
        setActiveMenu(e.target.id);
    }
    return ( <>
         <div className="container-fluid">
            <div className="row">
                <div className="col-3 bg-secondary p-4" style={{height:"100vh"}}>
                    <ul className="list-unstyled text-white">
                        <li className="my-2" onClick={handleClick} id="product-list"> View Products</li>
                        <li className="my-2" onClick={handleClick} id="add-product">Add New Product</li>
                        <li  className="my-2"  onClick={handleClick} id="user-list">Users</li>
                        <li  className="my-2"  onClick={handleClick} id="order-list">Orders</li>
                        <li  className="my-2"  onClick={handleClick} id="category-list">Categories</li>
                        <li  className="my-2"  onClick={handleClick} id="add-category">Add new category</li>
                        <li  className="my-2"  onClick={handleClick} id="brand-list">Brands</li>
                        <li  className="my-2"  onClick={handleClick} id="add-brand">Add New Brand</li>
                    </ul>
                </div>
                <div className="col">
                    {activeMenu == "add-product" && <AddProductForm/>}
                    {activeMenu == "product-list" && <ProductList/>}
                    {activeMenu == "add-category" && <AddCategoryForm/>}
                    {activeMenu == "add-brand" && <AddBrandForm/>}
                    {activeMenu == "category-list" && <CategoryList/>}
                    {activeMenu == "brand-list" && <BrandList/>}
                    
                </div>
            </div>
         </div>
    </> );
}
 
export default AdminDashboard;