import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();

    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        setUsers(result.data.reverse())
    }

    const handleDelete = async id => {

        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers()

    }
    return ( 
        <div className="container">
            <h1 className="text-center m-2 display-4">User List</h1>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope='row'>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary m-2" to={`users/view/${user.id}`} >View</Link>
                                    <Link className="btn btn-outline-primary" to={`users/edit/${user.id}`} >Edit</Link>
                                    <Link className="btn btn-danger m-2" onClick = {() => handleDelete(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>


        </div>
    );
};

export default Home;