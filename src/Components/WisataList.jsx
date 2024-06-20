import WisataItem from "./WisataItem";

function WisataList({filteredWisata}){
    console.log(filteredWisata);
    if(!filteredWisata.length){
        return (
            <section className="wisata-list-empty">
                <p>Tidak Ada Tempat Wisata</p>
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