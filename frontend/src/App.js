import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import UsersList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light p-3">
        <Link className="navbar-brand" to="/">
          UserApp
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Users
          </Link>
          <Link className="nav-link" to="/add">
            Add User
          </Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
