import './login.css'
const Signup = () => {
   let name;
   let email;
   let password;
    const handlechage = (e) =>{
        if(e.target.name == "name")
        name = e.target.value
        
        if(e.target.name == "email")
        email = e.target.value

        if(e.target.name == "password")
        password = e.target.value
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({name,email,password})
        fetch("http://localhost:5000/users",{
            "method": "post",
            "headers": {
                'Content-Type': 'application/json',
            },
            "body":JSON.stringify({name,email,password})
        });
    }



    return ( 
    <div className='login-form-container'>
        <form className='shadow bg-light border'>
            <h4 className='text-center m-2'>Welcome Shopkart ! Please Signup</h4>
            <div className="form-group">
                <input className="form-control" type="text" placeholder='Full name' name="name" onChange={handlechage}/>
            </div>
            <div className="form-group"> 
                <input className="form-control" type="text" placeholder='email' name="email" onChange={handlechage}/>
            </div>
            <div className="form-group">
                <input className="form-control" type="password" placeholder='password' name="password" onChange={handlechage}/>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>Signup</button>
        </form> 
    </div>);
}
 
export default Signup;