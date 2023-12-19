import { useEffect } from "react";

const AppDataTable = (props) => { 
    return ( 
        <>
          {
            props.data &&<table className="table">
              {/* creating headers */}
            <tr>
              {Object.keys(props.data[0]).map(k=>(<th>{k}</th>))}
            </tr>
            {/* creating data rows */}
            {props.data.map(d=>( <tr>
              {Object.keys(props.data[0]).map(k =>(<td>{d[k]}</td>) )}
            </tr>))}
        </table>
          } 
        </>
     );
}
 
export default AppDataTable;