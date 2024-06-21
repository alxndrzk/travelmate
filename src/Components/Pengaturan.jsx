import React, { useState, useEffect } from 'react';
import Nav from './Nav';

const Pengaturan = () => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the PUT request to update the user data
    fetch('/api/update-profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or error response
        console.log('Success:', data);
        // Update localStorage with new user data
        localStorage.setItem('user', JSON.stringify(data));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle file upload logic here (e.g., sending the file to the server)
    console.log('Selected file:', file);
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Pengaturan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Ganti Foto Profil</label>
            <input type="file" onChange={handleFileChange} className="p-2 border rounded" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Ganti Nama</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Ganti Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-poppins bg-primary-color text-white font-bold rounded-md hover:text-gray-900"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </>
  );
};

export default Pengaturan;
