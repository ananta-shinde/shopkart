const Checkout = (props) => {
    return ( <>
        <div className="container">
            <div className="row p-4 text-muted">
               <h6>Enter your shipping details below :</h6>
               <div className="col-5">
                   <div className="border p-4 shadow mt-4">
                        <p className="text-muted">Personal Details :</p>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Full Name"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Contact"/>
                        </div>
                    </div>
                   <div className="border p-4 shadow mt-4">
                        <p className="text-muted">Shipping Address :</p>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Address Line 1"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Address line 2"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="City"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="State"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Country"/>
                        </div>
                        <div className="form-group mb-4">
                            <input className="form-control" placeholder="Pincode"/>
                        </div>
                        <button className="btn btn-success">Place Order</button>
                    </div>
                    
                </div>
               <div className="offset-1 col-5">
                    <div className="p-4">
                        <p className="text-muted">Order Details :</p>
                        {props.cartProducts.map(p =>(
                            <div className="row">
                            <div className="col-6">
                                {p.name}
                            </div>
                            <div className="col-6">
                                {p.price}
                            </div>
                        </div>
                        ))}
                    </div>
               </div>
            </div>
        </div>
    </> );
}
 
export default Checkout;