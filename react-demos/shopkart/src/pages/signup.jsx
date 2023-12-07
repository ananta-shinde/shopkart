import './login.css'
const Signup = () => {
    return ( 
    <div className='login-form-container'>
        <form className='shadow bg-light border'>
            <h4 className='text-center m-2'>Welcome Shopkart ! Please Signup</h4>
            <div className="form-group">
                <input className="form-control" type="text" placeholder='Full name'/>
            </div>
            <div className="form-group">
                 
                <input className="form-control" type="text" placeholder='email'/>
            </div>
            <div className="form-group">
                <input className="form-control" type="password" placeholder='password'/>
            </div>
            <button className="btn btn-primary">Signup</button>
        </form> 
    </div>);
}
 
export default Signup;