import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser, deleteUser } from '../store/usersSlice';
import Table from '../components/Table';
import Modal from '../components/Modal';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddEdit = (user) => {
    if (selectedUser) {
      dispatch(editUser(user)); // Edit existing user
    } else {
      dispatch(addUser(user)); // Add new user
    }
    setModalOpen(false);
    setSelectedUser(null); // Reset selected user after action
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Users Management</h1>
      <button
        onClick={() => {
          setSelectedUser(null); // Clear selected user when adding
          setModalOpen(true);
        }}
        className="bg-blue-500 mb-4 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200"
      >
        Add User
      </button>
      <Table 
        data={users} 
        onEdit={(user) => {
          setSelectedUser(user); // Set user to edit
          setModalOpen(true);
        }} 
        onDelete={(id) => dispatch(deleteUser(id))} 
      />
      {modalOpen && (
        <Modal 
          onClose={() => {
            setModalOpen(false); 
            setSelectedUser(null); // Clear selected user when closing modal
          }} 
          onSubmit={handleAddEdit} 
          user={selectedUser} 
        />
      )}
    </div>
  );
};

export default Users;
