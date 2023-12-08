import './login.css'
const Login = () => {
    let email;
    let password;

    const handlechange = (e) =>{
        if(e.target.name == "email")
        email = e.target.value

        if(e.target.name == "password")
        password = e.target.value
    }


   const handleSubmit = async (e) =>{
         e.preventDefault()
         const response = await fetch("http://localhost:5000/users",{
            "method": "get",    
        });
        console.log(response.json());
   }

    return ( 
    <div className='login-form-container'>
        <form className='shadow bg-light border'>
            <h4 className='text-center m-2'>Welcome Back ! Please Login</h4>
            <div className="form-group">
                 
                <input className="form-control" type="text" placeholder='username' name="email" onChange={handlechange}/>
            </div>
            <div className="form-group">
 
                <input className="form-control" type="password" placeholder='password' name="password" onChange={handlechange}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </form> 
    </div>);
}
 
export default Login;