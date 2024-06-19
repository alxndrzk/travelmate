import ArtikelItem from './ArtikelItem';
import PropTypes from 'prop-types';

function ArtikelList({filteredArtikel}){
    return (
        <section className="artikel-list">
            {filteredArtikel.map((artikel) => {
                return <ArtikelItem key={artikel} {...artikel}/>
            })}
        </section>
    )
}

ArtikelList.propTypes = {
    filteredArtikel: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ArtikelList;