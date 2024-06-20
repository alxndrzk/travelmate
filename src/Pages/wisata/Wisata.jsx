import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchBar from "../../Components/SearchBar";
import WisataList from "../../Components/WisataList";
import { FaArrowLeft } from 'react-icons/fa';

function Wisata({ wisata, title }) {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');
    const [filteredWisata, setFilteredWisata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (wisata) {
            setFilteredWisata(wisata);
            setLoading(false);
        }
    }, [wisata]);

    console.log(wisata)

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        if (keyword) {
            setFilteredWisata(wisata.filter(item => 
                item.name.toLowerCase().includes(keyword.toLowerCase())
            ));
        } else {
            setFilteredWisata(wisata);
        }
    };

    return (
        <section className="page-wisata">
            <button className="action-page-wisata" onClick={() => navigate(-1)}>
                <FaArrowLeft className='icon-no-border'/> Kembali
            </button>
            <h3 className="title-detail-wisata">{title}</h3>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <WisataList filteredWisata={filteredWisata}/>
            )}
        </section>
    );
}

export default Wisata;
