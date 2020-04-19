import React, { useState } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

const AddUser = () => {

    let history = useHistory();

    const [user,setUser] = useState({
        name: "",
        username : "",
        email : "",
        phone : "",
        website : ""

    });
    const {name,username,email,phone,website} = user;

    const handleInput = e => {
       setUser({...user,[e.target.name]: e.target.value})
       console.log(e.target.value)
    }
    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        
        history.push("/")


    }
    return (
        <div className="container">
       
            <form className='border shadow  p-4 m-5' onSubmit = {e => handleSubmit(e)}>
            <h3 className="text-center">Add User</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} name="name" placeholder="Enter your name" className="form-control" onChange = {e => handleInput(e)}  />
                    
                </div>
                <div className="form-group">
                    <label>UserName</label>
                    <input type="text" value={username} name="username" onChange = {e => handleInput(e)} placeholder="Enter your username" className="form-control"  />
                    
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="email" value={email} name="email" onChange = {e => handleInput(e)} placeholder="Enter your email" className="form-control"  />
                    
                </div>
                <div className="form-group">
                    <label >Phone Number</label>
                    <input type="text" value={phone} name="phone" onChange = {e => handleInput(e)} placeholder="Enter your phoneNumber" className="form-control"  />
                    
                </div>
                <div className="form-group">
                    <label  >Website</label>
                    <input type="text" value={website} name="website" onChange = {e => handleInput(e)} placeholder="Enter your website name" className="form-control"  />
                    
                </div>
                <button type="submit" className="btn btn-primary btn-block ">Submit</button>
            </form>
        </div>
    );
};

export default AddUser;