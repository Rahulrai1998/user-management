import React from 'react';
import AddUserForm from './components/AddUserForm';
import axios from './api/axiosInstance'; 

const App = () => {
  const handleAddUser = async (userData) => {
    try {
      const res = await axios.post('/user', userData);
      console.log('User added:', res.data);
      alert('User added successfully');
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert('Error adding user');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Add User</h1>
      <AddUserForm onSubmit={handleAddUser} />
    </div>
  );
};

export default App;
