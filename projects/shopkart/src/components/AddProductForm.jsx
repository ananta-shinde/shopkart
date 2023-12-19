const AddProductForm = () => {
    return (<>
        <form>
            <h4>Enter new product details :</h4>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="name of product"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="price of product"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="category of product"/>
            </div>
        </form>
    </>  );
}
 
export default AddProductForm;