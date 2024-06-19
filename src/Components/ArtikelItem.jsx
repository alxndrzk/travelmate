import { Link } from "react-router-dom";

function ArtikelItem({user_id, title, description, imageUrl}){
    return(
        <article className='card-artikel-wisata-container'>
            <div className="card-artikel-wisata">
                <img src={imageUrl} alt="Gambar Wisata" className="artikel-card-image"/>
                <div className="artikel-card-content">
                    <h3 className='artikel-card-title'><Link to={`/artikel/${user_id}`}></Link>Name{title}</h3>
                    <p className='artikel-card-description'>Description{description}</p>
                </div>
            </div>
        </article>
    )
}

export default ArtikelItem;