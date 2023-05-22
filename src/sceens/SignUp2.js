import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function SignUp2() {

    let navigate=useNavigate()
    const [credentials,setCredentials]=useState({name:"",email:"",password:"",geolocation:""});

const handleSubmit=async(e)=>{

    e.preventDefault();
    const response= await fetch("https://food-backend-uefm.onrender.com/api/createuser",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    });
    const json=await response.json()
    console.log(json);
    if(!json.success){
        alert("Enter valid credentials")
    }
    if(json.success){
        navigate('/login')
    }

}
const onChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value})
}


  return (
    <div>
      <div>
        <Navbar/>
      </div>
    <div className='container'>
    <form onSubmit={handleSubmit} className='w-50 m-auto mt-5 border bg-dark border-success rounded' >
    <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}  id="exampleInputPassword1"/>
  </div>
  <div className="m-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>

    </div>
    </div>
  )
}
