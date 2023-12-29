import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSideNavbar from "./AdminSideNavbar";
import AppDataTable from "./AppDataTable";
import AdminProductList from "./AdminProductList";
import AdminUsersList from "./AdminUsersList";
import AdminBrandList from "./AdminBrandList";
import AdminCategoryList from "./AdminCategoryList"
const AdminDashboard = (props) => {
    const [activeMenu, setActiveMenu] = useState("products");
    return ( <>
       <AdminNavbar/>
       <div className="row">
         <div className="col-3">
            <AdminSideNavbar setActiveMenu={setActiveMenu}/>
         </div>
         <div className="col">
              {(activeMenu == "products") && <AdminProductList/>}
              {(activeMenu == "users") && <AdminUsersList/>}
              {(activeMenu == "categories") && <AdminCategoryList/>}
              {(activeMenu == "users") && <AdminBrandList/>}
         </div>
       </div>  
    </> );
}
 
export default AdminDashboard;