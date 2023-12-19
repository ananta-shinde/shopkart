import { useState } from "react";

const AdminSideNavbar = (props) => {
    

    const handleClick = (e)=>{
          if(e.target.id == "users")
          {
            props.setActiveMenu("users");
          }
          if(e.target.id == "products")
          {
            props.setActiveMenu("products");
          }
          if(e.target.id == "orders")
          {
            props.setActiveMenu("orders");
          }
    }
    return ( 
         <nav className="Navbar px-4">
            <ul className="navbar-nav ">
                <li className="nav-item p-2 "><a className="nav-link" onClick={handleClick} id="users">Users</a></li>
                <li className="nav-item p-2"><a className="nav-link" onClick={handleClick} id="products">Products</a></li>
                <li className="nav-item p-2"><a className="nav-link" onClick={handleClick} id="orders">Orders</a></li>
            </ul>
         </nav>
     );
}
 
export default AdminSideNavbar;