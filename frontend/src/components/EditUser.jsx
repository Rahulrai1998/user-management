import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddUserForm from '../components/AddUserForm';
import axios from '../api/axiosInstance';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/user/${id}`);
        setUserData(res.data);
      } catch (error) {
        alert('User not found');
        navigate('/');
      }
    };
    fetchUser();
  }, [id, navigate]);

  const handleUpdateUser = async (updatedData) => {
    try {
      await axios.put(`/user/${id}`, updatedData);
      alert('User updated successfully');
      navigate('/');
    } catch (error) {
      alert('Failed to update user');
      console.error(error);
    }
  };

  if (!userData) return <p>Loading user data...</p>;

  return (
    <>
      <h2>Edit User</h2>
      <AddUserForm onSubmit={handleUpdateUser} initialData={userData} />
    </>
  );
};

export default EditUser;
