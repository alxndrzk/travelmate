import React from "react";

const Pariwisata = ({pariwisata}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Pariwisata</h2>
      <ul className="space-y-2">
        {pariwisata.map((p) => (
          <li
            key={p.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-lg font-medium">{p.name}</p>
            <p className="text-sm text-gray-600">{p.category}</p>
            <p className="text-sm text-gray-600">{p.address}</p>
            <p className="text-sm text-gray-600">harga :{p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pariwisata;
