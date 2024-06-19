import {FaArrowLeft} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ArtikelDetail({title, imageUrl, description}) {
    const navigate = useNavigate();

    return(
        <section className="artikel-detail-page">
            <button className="action-detail-artikel" onClick={() => navigate(-1)}><FaArrowLeft className='icon-no-border'/> Kembali</button>
            <h3 className='title-detail-artikel'>Detail Artikel</h3>
            <div className='body-detail-artikel'>
                <h1 className='artikel-detail-title'>title{title}</h1>
                <img src={imageUrl} className='artikel-detail-image' alt='Gambar Wisata'/>
                <p className='artikel-detail-description'>desc{description}</p>
            </div>
        </section>
    )
}

export default ArtikelDetail;