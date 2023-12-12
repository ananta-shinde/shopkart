import { useState } from 'react';
import './login.css'
import { redirect, useNavigate } from 'react-router-dom';
const Login = () => {

     //1. accept inputs from user ( email & password)
     //1.a create UI structure
     //1.b process formdata, collect it into an JS object

     //2. post details to backend
     //3. process response

    const navigate = useNavigate();
    const [email, setEmail]  = useState();
    const [password, setPassword]  = useState();
    const [message,setMessage] = useState();
     

    const handlechange = (e) =>{
        if(e.target.name == "email")
          setEmail(e.target.value);

        if(e.target.name == "password")
        setPassword(e.target.value);
    }


   const handleSubmit =  (e) =>{
         e.preventDefault()
        fetch(`http://localhost:5000/users?email=${email}`,{
            "method": "get",    
        })
        .then(res => res.json())
        .then(users => {
            console.log(users)
            if(users.length == 0)
            {
                 setMessage("User does not exist");
            }
            else{
                 const user = users[0];
                 if(user.password == password)
                 {
                    navigate("/profile");
                    setMessage()
                 }
                 else{
                    setMessage("Invalid creds");
                 }
               
            }
        })
   }

    return ( 
    <div className='login-form-container'>
        <form className='shadow bg-light border'>
            <h4 className='text-center m-2'>Welcome Back ! Please Login</h4>
            {message && <div className=" alert alert-danger">{message}</div>}
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