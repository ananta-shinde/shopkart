import { useEffect, useState } from "react";
import AppDataTable from "./AppDataTable";

const AdminUsersList = () => {
    const [users,setUsers] =  useState();  
    const getUsers = ()=>{
        fetch("http://localhost:5000/users",{ method:"get"})
        .then(res => res.json())
        .then(data =>{
              setUsers(data);
        })
    } 
    useEffect(()=>{
           getUsers();
    },[]);
    return (<>
        <AppDataTable data={users}/>
    </>  );
}
 
export default AdminUsersList;