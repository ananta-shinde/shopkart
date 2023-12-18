import { useEffect } from "react";

const AppDataTable = (props) => {
    
    
    return ( 
        <>
          {
            props.data &&<table className="table">
            <tr>
              {/* {keys.map(k=>(<th>{k}</th>))} */}
            </tr>
            {props.data.map(u=>( <tr>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>))}
        </table>
          } 
        </>
     );
}
 
export default AppDataTable;