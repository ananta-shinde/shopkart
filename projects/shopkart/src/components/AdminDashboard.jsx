import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSideNavbar from "./AdminSideNavbar";
import AppDataTable from "./AppDataTable";

const AdminDashboard = (props) => {
    const [users,setUsers] = useState();
    const getUsers = ()=>{
        fetch("http://localhost:5000/users",{ method:"get"})
        .then(res => res.json())
        .then(data =>{
              setUsers(data);
        })
    } 
    useEffect(()=>{
        console.log("user list component mponted")
        getUsers();
    },[])

    return ( <>
       <AdminNavbar/>
       <div className="row">
         <div className="col-3">
            <AdminSideNavbar/>
         </div>
         <div className="col">
             <AppDataTable data={users}/>
         </div>
       </div>
       

    </> );
}
 
export default AdminDashboard;