import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: ''
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        website: user.website
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      axios.put(`http://localhost:5000/users/${user.id}`, formData)
        .then(response => onSave(response.data))
        .catch(error => console.error(error));
    } else {
      axios.post('http://localhost:5000/users', formData)
        .then(response => onSave(response.data))
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
      <button class="btn btn-primary" type="submit">Save</button>
    </form>
  );
};

export default UserForm;
