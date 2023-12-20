const AddProductForm = (props) => {
    let name;
    let price;
    let category;
    const handleChange = (e) =>{
          if(e.target.name == "name")
          {
              name = e.target.value
          }
          if(e.target.name == "price")
          {
              price = e.target.value
          }
          if(e.target.name == "category")
          {
              category = e.target.value
          }
    }

    const handleClick = (e) =>{
            e.preventDefault()
            fetch("http://localhost:5000/products",{
                method:"post",
                body : JSON.stringify({name,price,category}),
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
                <input type="text" className="form-control" placeholder="category of product" name="category"
               onChange={handleChange}/>
            </div>
            <button className="btn btn-success" onClick={handleClick}>Save Product</button>
        </form>
    </>  );
}
 
export default AddProductForm;