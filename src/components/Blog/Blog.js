import React, { useState, useEffect } from "react";

const Blog = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="container">
            <h2 className="text-center mb-4">Users</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blog;
