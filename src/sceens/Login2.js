import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function Login2() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://food-backend-uefm.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if(json.success){
        localStorage.setItem("useEmail",credentials.email);
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate('/')
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} className='w-50 m-auto mt-5 border bg-dark border-success rounded'>
          
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-white">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="m-3 btn btn-primary">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            I'm a New User
          </Link>
        </form>
      </div>
    </div>
  );
}
