import WisataItem from "./WisataItem";

function WisataList({filteredWisata}){
    if(!filteredWisata.length){
        return (
            <section className="wisata-list-empty">
                <p>Tidak ada catatan</p>
            </section>
        )
    }

    return (
        <section className="wisata-list">
            {filteredWisata.map((wisata) => {
                return <WisataItem key={wisata.id} {...wisata} />
            })}
        </section>
    )
}

export default WisataList;