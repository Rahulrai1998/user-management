import React, { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    addr: '',
    otp: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h3>Add User</h3>

      {/* Name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name *</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      {/* Email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email *</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      {/* Phone */}
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone *</label>
        <input
          type="text"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      {/* Address */}
      <div className="mb-3">
        <label htmlFor="addr" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="addr"
          name="addr"
          value={formData.addr}
          onChange={handleChange}
        />
      </div>

      {/* OTP */}
      <div className="mb-3">
        <label htmlFor="otp" className="form-label">OTP</label>
        <input
          type="text"
          className="form-control"
          id="otp"
          name="otp"
          value={formData.otp}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Add User</button>
    </form>
  );
};

export default AddUserForm;
