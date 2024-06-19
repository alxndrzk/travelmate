import React from "react";
import ArtikelDetail from "../../Components/ArtikelDetail";
import { useParams } from "react-router-dom";
import { getArticles } from "../../Utils/Api";

function DetailArticlePage() {
    const{id} = useParams()
    const [artikel, setArtikel] = React.useState(null)

    React.useEffect(() => {
        const fetchArtikel = async () => {
            const {data} = await getArticles(id);
            setArtikel(data)
        }

        fetchArtikel();
    }, [id]);

    return (
        <section className="detail-artikel">    
            <ArtikelDetail {...artikel}/>
        </section>
    )
}

export default DetailArticlePage;