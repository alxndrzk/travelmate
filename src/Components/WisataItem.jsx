import { Link } from "react-router-dom";
function WisataItem({_id, image, name, description, address, price}){
    console.log(image);
    return (
        <article className='card-tempat-wisata-container'>
            <div className="card-tempat-wisata">
                <img src={image} alt="Gambar Wisata" className="wisata-card-image"/>
                <div className="wisata-card-content">
                <h3 className='wisata-card-name'><Link to={`/wisata/${_id}`}>Name{name}</Link></h3>
                <p className='wisata-card-address'>Alamat{address}</p>
                <p className='wisata-card-description'>Description :{description}</p>
                <p className='wisata-card-price'>Harga Tiket: Rp {price}</p>
            </div>
            </div>
        </article>
    )
}

export default WisataItem;