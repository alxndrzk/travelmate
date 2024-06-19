import React from "react";
import { updateUser, deleteUser } from '../../Utils/Api';

export const User = ({ users, fetchData }) => {
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchData(); // Refresh data after delete
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = async (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    try {
      await updateUser(id, { name: newName });
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Users</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => handleEdit(user.id)}
                className="bg-blue-500 text-white py-1 px-3 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
