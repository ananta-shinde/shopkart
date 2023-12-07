import './login.css'
const Login = () => {
    return ( 
    <div className='login-form-container'>
        <form className='shadow bg-light border'>
            <h4 className='text-center m-2'>Welcome Back ! Please Login</h4>
            <div className="form-group">
                 
                <input className="form-control" type="text" placeholder='username'/>
            </div>
            <div className="form-group">
 
                <input className="form-control" type="password" placeholder='password'/>
            </div>
            <button className="btn btn-primary">Login</button>
        </form> 
    </div>);
}
 
export default Login;