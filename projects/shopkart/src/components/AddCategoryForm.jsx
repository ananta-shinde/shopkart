import { useState } from "react";

const AddCategoryForm = () => {

    const [formData,setFormdata] = useState({});
    const handleChange = (e)=>{
             setFormdata({...formData,name:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/categories",{
            method:"Post",
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("category submitted with id" + data.id);
        }).catch(err=>{
            console.log(err);
        })
    }

    return ( 
        <div className="p-4">
         <h4>Add new Category</h4>
         <form>
            <div className="form-group">
                <label>Category Name :</label>
                <input className="form-control" type="text" placeholder="Ex. men, women,winter" name="name" onChange={handleChange}/>
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
         </form>
    </div>
     );
}
 
export default AddCategoryForm;