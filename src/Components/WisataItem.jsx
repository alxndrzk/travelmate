import React from 'react';
import { Link } from 'react-router-dom';

function WisataItem({ _id, image, name, description, address, price }) {
    return (
        <article className='border-2 border-slate-600 rounded-lg overflow-hidden shadow-lg'>
            <img src={image} alt="Gambar Wisata" className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className='text-xl font-semibold mb-2'>
                    <Link to={`/wisata/${_id}`} className="text-blue-500 hover:underline">
                        {name}
                    </Link>
                </h3>
                <p className='text-gray-700 mb-2'>Alamat: {address}</p>
                <p className='text-gray-700 mb-2'>Deskripsi: {description}</p>
                <p className='text-gray-900 font-bold'>Harga Tiket: Rp {price}</p>
            </div>
        </article>
    );
}

export default WisataItem;
