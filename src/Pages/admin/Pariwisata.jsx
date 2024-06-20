import React, { useState } from 'react';
import { createPariwisata } from '../../Utils/Api'; // Ensure the correct path to your API file

const Pariwisata = ({ pariwisata }) => {
  const [newPariwisata, setNewPariwisata] = useState({
    name: '',
    category: '',
    address: '',
    price: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPariwisata({
      ...newPariwisata,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setNewPariwisata({
      ...newPariwisata,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newPariwisata.name);
    formData.append('category', newPariwisata.category);
    formData.append('address', newPariwisata.address);
    formData.append('price', newPariwisata.price);
    if (newPariwisata.image) {
      formData.append('image', newPariwisata.image);
    }

    try {
      const createdPariwisata = await createPariwisata(formData);
      // Handle the response or update the state to reflect the new entry
      console.log('Created Pariwisata:', createdPariwisata);
      // Optionally clear the form
      setNewPariwisata({
        name: '',
        category: '',
        address: '',
        price: '',
        image: null
      });
    } catch (error) {
      console.error('Error creating pariwisata:', error);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Pariwisata</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newPariwisata.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <select
            id="category"
            name="category"
            value={newPariwisata.category}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="" disabled>Select category</option>
            <option value="Kuliner">Kuliner</option>
            <option value="Budaya">Budaya</option>
            <option value="Religi">Religi</option>
            <option value="Pendidikan">Pendidikan</option>
            <option value="Kesenian">Kesenian</option>
            <option value="Alam">Alam</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newPariwisata.address}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newPariwisata.price}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Pariwisata
        </button>
      </form>
      <ul className="space-y-2">
        {pariwisata.map((p) => (
          <li
            key={p.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-lg font-medium">{p.name}</p>
            <p className="text-sm text-gray-600">{p.category}</p>
            <p className="text-sm text-gray-600">{p.address}</p>
            <p className="text-sm text-gray-600">Harga: {p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pariwisata;
