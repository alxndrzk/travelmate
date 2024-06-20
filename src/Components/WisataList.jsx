import React from 'react';
import WisataItem from './WisataItem';

function WisataList({ filteredWisata }) {
    console.log("Filtered Wisata:", filteredWisata);

    if (filteredWisata.length === 0) {
        return (
            <section className="flex items-center justify-center h-64">
                <p className="text-gray-500 text-lg">Tidak Ada Tempat Wisata</p>
            </section>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {filteredWisata.map((wisata, index) => {
                console.log(`Rendering item ${index + 1}`, wisata);
                return <WisataItem key={wisata._id} {...wisata} />
            })}
        </section>
    );
}

export default WisataList;
