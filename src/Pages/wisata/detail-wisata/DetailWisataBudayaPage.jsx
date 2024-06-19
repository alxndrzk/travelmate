import React from "react";
import WisataDetail from "../../../Components/WisataDetail";
import { useParams } from "react-router-dom";
import { getPariwisata } from "../../../Utils/Api";

function DetailWisataBudayaPage() {
    const{id} = useParams()
    const [wisata, setWisata] = React.useState(null)

    React.useEffect(() => {
        const fetchWisata = async () => {
            const {data} = await getPariwisata(id);
            setWisata(data)
        }

        fetchWisata();
    }, [id]);

    return (
        <section className="detail-wisata">    
            <WisataDetail {...wisata}/>
        </section>
    )
}

export default DetailWisataBudayaPage;