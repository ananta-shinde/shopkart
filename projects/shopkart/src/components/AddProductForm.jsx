import { useEffect, useState } from "react";

const AddProductForm = () => {
    const [categories,setCategories] = useState([]);
    const [brands,setBrands] = useState([]);
    const [formData,setFormdata] = useState({});

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

    const handleChange = (e)=>{
        if(e.target.name == "name")
        {
             setFormdata({...formData,name:e.target.value})
        }
        if(e.target.name == "price")
        {
             setFormdata({...formData,price:e.target.value})
        }
        if(e.target.name == "categoryId")
        {
             setFormdata({...formData,categoryId:e.target.value})
        }
        if(e.target.name == "brandId")
        {
             setFormdata({...formData,brandId:e.target.value})
        }
        if(e.target.name == "image_url")
        {
             setFormdata({...formData,image_url:e.target.value})
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/products",{
            method:"Post",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("product submitted with id" + data.id);
        }).catch(err=>{
            console.log(err);
        })
    }

    return ( <div className="p-4">
         <h4>Add new product</h4>
         <form>
            <div className="form-group">
                <label>Product Name :</label>
                <input className="form-control" type="text" placeholder="Ex. Laptop 15455" name="name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Product Price :</label>
                <input className="form-control" type="text" placeholder="Ex. 45000" name="price" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Product Category :</label>
                 <select className = "form-control" name="categoryId" id="" onChange={handleChange}>
                    <option value="0">-- select category --</option>
                    {
                        categories.map(c=>(<option value={c.id}>{c.name}</option>))
                    }
                 </select>
            </div>
            <div className="form-group">
                <label>Product Brand :</label>
                 <select className = "form-control" name="brandId" id="" onChange={handleChange}>
                    <option value="0">-- select brand --</option>
                    {
                        brands.map(b=>(<option value={b.id}>{b.name}</option>))
                    }
                 </select>
            </div>
            <div className="form-group">
                <label>Product Image :</label>
                <input className="form-control" type="url" placeholder="please provide URL" name="image_url" onChange={handleChange}/>
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
         </form>
    </div> );
}
 
export default AddProductForm;