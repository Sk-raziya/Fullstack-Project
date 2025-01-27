import React, { useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleSave = (user) => {
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>Welcome to my User Management</h1>
      <UserList onEdit={handleEdit} />
      <UserForm user={selectedUser} onSave={handleSave} />
    </div>
  );
};

export default App;
