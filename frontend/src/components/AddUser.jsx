import React from "react";
import { useNavigate } from "react-router-dom";
import AddUserForm from "../components/AddUserForm";
import axios from "../api/axiosInstance";

const AddUser = () => {
  const navigate = useNavigate();

  const handleAddUser = async (userData) => {
    try {
      await axios.post("/users", userData);
      alert("User added successfully");
      navigate("/");
    } catch (error) {
      alert("Failed to add user");
      console.error(error);
    }
  };

  return (
    <>
      <h2>Add User</h2>
      <AddUserForm onSubmit={handleAddUser} />
    </>
  );
};

export default AddUser;
