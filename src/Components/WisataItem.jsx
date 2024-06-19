import { Link } from "react-router-dom";
function WisataItem({id, imageUrl, name, category, address, price}){
    return (
        <article className='card-tempat-wisata-container'>
            <div className="card-tempat-wisata">
                <img src={imageUrl} alt="Gambar Wisata" className="wisata-card-image"/>
                <div className="wisata-card-content">
                <h3 className='wisata-card-name'><Link to={`/wisata/${id}`}></Link>Name{name}</h3>
                <p className='wisata-card-address'>Alamat{address}</p>
                <p className='wisata-card-description'>Description{category}</p>
                <p className='wisata-card-price'>Harga Tiket: Rp {price}</p>
            </div>
            </div>
        </article>
    )
}

export default WisataItem;