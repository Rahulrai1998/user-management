import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axiosInstance'; // your axios setup

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/user');
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (error) {
      console.error(error);
      alert('Failed to delete user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/edit/${user._id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button onClick={() => deleteUser(user._id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UsersList;
