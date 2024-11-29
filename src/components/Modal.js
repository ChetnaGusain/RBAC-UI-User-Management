import React, { useState } from 'react';

const Modal = ({ onClose, onSubmit, user }) => {
  const [formData, setFormData] = useState(user || { name: '', email: '', role: '', status: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal">
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
      <input name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Modal;
