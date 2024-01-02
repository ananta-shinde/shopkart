import { useEffect, useState } from "react";

const AddProductForm = () => {
    const [categories,setCategories] = useState([]);
    const [brands,setBrands] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{ method: "Get"})
        .then(res=> res.json())
        .then(data =>{
             setCategories(data);
        })

        fetch("http://localhost:5000/brands",{ method: "Get"})
        .then(res=> res.json())
        .then(data =>{
             setBrands(data);
        })
    },[])
    return ( <div className="p-4">
         <h4>Add new product</h4>
         <form>
            <div className="form-group">
                <label>Product Name :</label>
                <input className="form-control" type="text" placeholder="Ex. Laptop 15455"/>
            </div>
            <div className="form-group">
                <label>Product Price :</label>
                <input className="form-control" type="text" placeholder="Ex. 45000"/>
            </div>
            <div className="form-group">
                <label>Product Category :</label>
                 <select className = "form-control" name="" id="">
                    <option value="0">-- select category --</option>
                    {
                        categories.map(c=>(<option value={c.id}>{c.name}</option>))
                    }
                 </select>
            </div>
            <div className="form-group">
                <label>Product Brand :</label>
                 <select className = "form-control" name="" id="">
                    <option value="0">-- select brand --</option>
                    {
                        brands.map(b=>(<option value={b.id}>{b.name}</option>))
                    }
                 </select>
            </div>
            <div className="form-group">
                <label>Product Image :</label>
                <input className="form-control" type="url" placeholder="please provide URL"/>
            </div>
            <button className="btn btn-success">Submit</button>
         </form>
    </div> );
}
 
export default AddProductForm;