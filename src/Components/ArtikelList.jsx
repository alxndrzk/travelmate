import ArtikelItem from './ArtikelItem';
import PropTypes from 'prop-types';

function ArtikelList({articles}){
    console.log(articles);
    return (
        <section className="artikel-list">
            {articles.map((artikel) => {
                return <ArtikelItem key={artikel} {...artikel}/>
            })}
        </section>
    )
}


export default ArtikelList;