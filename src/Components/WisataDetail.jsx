import {FaArrowLeft} from 'react-icons/fa';

function WisataDetail({name, image, address, description, price}) {
    return(
        <section className="wisata-detail-page">
            <button className="action-detail-wisata"><FaArrowLeft className='icon-no-border'/> Kembali</button>
            <h3 className='title-detail-wisata'>Detail Wisata</h3>
            <div className='body-detail-wisata'>
                <h1 className='wisata-detail-name'>name{name}</h1>
                <img src={image} className='wisata-detail-image' alt='Gambar Wisata'/>
                <p className='wisata-detail-address'>address{address}</p>
                <p className='wisata-detail-price'>price{price}</p>
                <p className='wisata-detail-description'>desc{description}</p>
            </div>
        </section>
    )
}

export default WisataDetail;