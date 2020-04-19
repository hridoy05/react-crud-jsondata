import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ViewUser = () => {
    const {id} = useParams();
    const [user,setUser] = useState({
        name: "",
        username : "",
        email : "",
        phone : "",
        website : ""

    });
    const {name,username,email,phone,website} = user;

    useEffect(() =>{
        loadUsers();
    }, [])
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
    }
    return (
        <div className="container">
            <Link className="btn btn-primary m-3" to="/" >Back to home</Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr/>
            <ul className="list-group w-50">
                <li className="list-group-item">name : {user.name}</li>
                <li className="list-group-item">user name: {user.name}</li>
                <li className="list-group-item">email: {user.email}</li>
                <li className="list-group-item">phone: {user.phone}</li>
                <li className="list-group-item">website:{user.website}</li>
            </ul>
        </div>
    );
};

export default ViewUser;