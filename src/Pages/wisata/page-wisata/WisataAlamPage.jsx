import React from "react";
import SearchBar from "../../../Components/SearchBar";
import {FaArrowLeft} from 'react-icons/fa';
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPariwisata } from "../../../Utils/Api";
import WisataList from "../../../Components/WisataList";

function WisataAlamPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [wisata, setWisata] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {return searchParams.get('keyword') || '';});
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchWisata = async () => {
            setLoading(true);
            const response = await getPariwisata();
            if(!response.error) {
                setWisata(response.data || []);
            } else {
                setWisata([])
            }
            setLoading(false);
        };

        fetchWisata();
    }, []);


    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    };

    const filter = wisata.filter((wisatas) => {
        return wisatas.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="page-wisata">
            <button className="action-page-wisata" onClick={() => navigate(-1)}><FaArrowLeft className='icon-no-border'/> Kembali</button>
            <h3 className="title-detail-wisata">Wisata Alam</h3>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <WisataList filteredWisata={filter}/>
                </>
            )}
        </section>
    )
}

export default WisataAlamPage;