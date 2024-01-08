import { useEffect } from "react";
import { useState } from "react";

const CategoryList = () => {
    const [products,setProducts] = useState();
    let keys = [];
    if(products)
    {
        keys = Object.keys(products[0])
    }

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
            method:"Get",
        }).then(res=>res.json())
        .then(data =>{
            setProducts(data);
        });
       
    },[])

    return ( <>
    { products ?
          <table className="table">
          <tr>
              {
                 keys.map(k=>(<th>{k}</th>))
              }
          </tr>
          {
             products.map(p=>( <tr>
                  { keys.map(k=>(<td>{p[k]}</td>))}
              </tr>))
          }
       </table>:
       <p> No data to show</p>
    }
          
    </> );
}
 
export default CategoryList;