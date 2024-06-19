import React from "react";
import SearchBar from "../../Components/SearchBar";
import {FaArrowLeft} from 'react-icons/fa';
import { useNavigate, useSearchParams } from "react-router-dom";
import { getArticles } from "../../Utils/Api";
import ArtikelList from "../../Components/ArtikelList";

function ReadArticlePage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [artikel, setArtikel] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {return searchParams.get('keyword') || '';});
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const fetchArtikel = async () => {
            setLoading(true);
            const response = await getArticles();
            if(!response.error) {
                setArtikel(response.data);
            }
            setLoading(false);
        };

        fetchArtikel();
    }, []);

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    };

    const filter = artikel.filter((artikels) => {
        return artikels.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="page-detail">
            <button className="action-page-artikel" onClick={() => navigate(-1)}><FaArrowLeft className='icon-no-border'/> Kembali</button>
            <h3 className="title-detail-artikel">Artikel</h3>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}/>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <ArtikelList filteredArtikel={filter}/>
                </>
            )}
        </section>
    )
}

export default ReadArticlePage;