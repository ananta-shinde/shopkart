const AddProductForm = (props) => {
    let name;
    let price;
    let categoryId;
    const handleChange = (e) =>{
          if(e.target.name == "name")
          {
              name = e.target.value
          }
          if(e.target.name == "price")
          {
              price = e.target.value
          }
          if(e.target.name == "categoryId")
          {
              categoryId = e.target.value
          }
    }

    const handleClick = (e) =>{
            e.preventDefault()
            fetch("http://localhost:5000/products",{
                method:"post",
                body : JSON.stringify({name,price,categoryId}),
                headers :{
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                console.log(res);
                props.deactivateForm(false);
            })
    }
    return (<>
        <form>
            <h4>Enter new product details :</h4>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="name of product" name="name" 
                 onChange={handleChange}/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="price of product" name="price"
                onChange={handleChange}/>
            </div>
            <div className="form-group">
                <select className="form-control" name="categoryId" onChange={handleChange} >
                    <option value="0">-- select product category --</option>
                    <option value="1">Men</option>
                    <option value="2">Women</option>
                </select>    
            </div>
            <button className="btn btn-success" onClick={handleClick}>Save Product</button>
        </form>
    </>  );
}
 
export default AddProductForm;