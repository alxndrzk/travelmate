import React from 'react'
import '../Styles/index.css';

const images = require.context('../Assets', true, /\.(png|jpg|jpeg)$/);

const Homepage = () => {


    const hero = images('./hero.png');
    const alam = images('./alam.jpeg');
    const budaya = images('./budaya.jpeg');
    const kesenian = images('./kesenian.jpg');
    const kuliner = images('./kuliner.jpg');
    const pendidikan = images('./pendidikan.jpg');
    const religi = images('./religi.jpeg');
    const istiqlal = images('./Istiqlal.jpeg');
    const jakarta = images('./jakarta.jpeg');
    const komodo = images('./komodo.jpeg');
    const malioboro = images('./Malioboro.jpeg');
    const tamanPintar = images('./tamanPintar.jpeg');
    const bali = images('./bali.jpeg');
    const alex = images('./alex.jpg');
    const rizki = images('./rizki.jpg');
    const jonathan = images('./jonathan.jpg');

    return(
        <div className="bg-homepage min-h-screen font-poppins">
      <header className="bg-homepage shadow-md p-4 flex items-center">
      <div className="text-4xl font-poppins font-bold text-black ml-72 ">TravelMate</div>
      
      <nav className="flex space-x-6 ml-96">
        <a href="/" style={{ color: '#2D3E50' }} className="text-lg font-poppins font-bold hover:text-gray-900">Beranda</a>
        <div className="relative">
        <a href="" style={{ color: '#2D3E50' }} className="text-lg font-poppins font-bold text-black hover:text-gray-900">Wisata</a>
        <div className="absolute hidden group-hover:block bg-white shadow-lg">
          <a href="#sub-menu-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sub Menu 1</a>
          <a href="#sub-menu-2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sub Menu 2</a>
          <a href="#sub-menu-3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sub Menu 3</a>
        </div>
        </div>
        <a href="#artikel-terbaru" style={{ color: '#2D3E50' }} className="text-lg font-poppins font-bold text-black hhover:text-gray-900">Artikel</a>
        <a href="#tentang-kami" style={{ color: '#2D3E50' }} className="text-lg font-poppins font-bold text-black hover:text-gray-900">Tentang Kami</a>
      </nav>

      <div className="space-x-3 ml-96">
        <button className="px-4 py-2 font-poppins border border-gray-400 font-bold rounded-md text-black hover:text-gray-950" onClick={() => window.location.href='/login'}>Masuk</button>
        <button className="px-4 py-2 font-poppins bg-primary-color text-white font-bold rounded-md hover:text-gray-900" onClick={() => window.location.href='/register'}>Daftar</button>
      </div>
      </header>
  
        <main className="container mx-auto py-8">
          <div style={{ 
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}  className="bg-gray-200 rounded-lg p-32 shadow-md">
            <h2 className="text-6xl font-bold text-white text-center mb-4">Cari Wisata?</h2>
            <p className="text-2xl text-white text-center italic font-light mb-6">Temukan destinasi wisata di seluruh indonesia 
              <br />hanya melalui satu platform saja</p>
            <div className="flex flex-col items-center space-y-4 justify-center">
              <input type="text" placeholder="Cari destinasi wisata?" className="bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none text-center focus:border-blue-500 w-72" />
              <button className="bg-primary-color hover:text-gray-900 text-white font-bold py-2 px-6 rounded">Cari</button>
            </div>
          </div>
  
          <h2 id="jenis-pariwisata" className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4">Jenis Pariwisata</h2>
          <div className="container mx-auto px-48 py-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={kuliner}
            alt="Kuliner"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800">Kuliner</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={budaya}
            alt="Budaya"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800">Budaya</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={religi}
            alt="Religi"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800">Religi</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={pendidikan}
            alt="Pendidikan"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800">Pendidikan</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={kesenian}
            alt="Kesenian"
          />
        </div>
        <h3 className="text-2xl font-bold text-center text-gray-800">Kesenian</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={alam}
            alt="Alam"
          />
        </div>
        <h3 className="text-xl font-bold text-center text-gray-800">Alam</h3>
      </div>
    </div>
  
          <h2 id="artikel-terbaru"className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4">Artikel Terbaru</h2>

          <div className="container mx-auto px-2 py-16 grid grid-cols-2 gap-4 md:grid-cols-3  ">
            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={malioboro} 
              alt="Malioboro" 
              className="rounded-lg w-full h-full object-cover" />
              </div>
            <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Menggoyang Lidah di Surga Kuliner Nusantara: Pengalaman Wisatawan di Jalan Malioboro Yogyakarta</h3>
            </div>
        
            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={bali} alt="Bali" className="rounded-lg w-full h-full object-cover" />
              </div>
              <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Menguak Keajaiban Budaya Indonesia: Kisah Wisatawan di Desa Penglipuran Bali</h3>
            </div>

            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={istiqlal} alt="Istiqlal" className="rounded-lg w-full h-full object-cover" />
              </div>
              <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Menemukan Kedamaian: Cerita Perjalanan Wisatawan di Masjid Istiqlal Jakarta</h3>
            </div>
            
            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={komodo} alt="Komodo" className="rounded-lg w-full h-full object-cover" />
              </div>
              <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Keindahan Alam Nusantara: Testimoni Wisatawan di Taman Nasional Komodo</h3>
            </div>

            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={jakarta} alt="Galeri" className="rounded-lg w-full h-full object-cover" />
              </div>
              <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Meresapi Karya: Review Wisatawan di Galeri Nasional Indonesia, Jakarta</h3>
            </div>

            <div>
            <div className="bg-white rounded-lg shadow-md flex flex-col items-center overflow-hidden w-90 h-60">
              <img src={tamanPintar} alt="Taman Pintar" className="rounded-lg w-full h-full object-cover" />
              </div>
              <h3 className="text-lg text-1xl text-center font-normal text-gray-800">Melek Pengetahuan: Pengalaman Wisatawan di Taman Pintar Yogyakarta</h3>
            </div>
          </div>
  
          <h2 id="tentang-kami" className="text-4xl text-center font-bold text-gray-800 mt-8 mb-4">Tentang Kami</h2>
          <div className="container mx-auto px-48 py-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={alex}
            alt="alex"
          />
        </div>
        <h3 className="text-xl font-normal text-center text-gray-800">Alexander <br/> R2276YB494</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={jonathan}
            alt="jonathan"
          />
        </div>
        <h3 className="text-xl font-normal text-center text-gray-800">Jonathan <br/> R1836YB418</h3>
      </div>
      <div className="flex flex-col items-center">
      <div className="rounded-full shadow-lg w-64 h-64 overflow-hidden">
          <img
            className="rounded-full w-full h-full object-cover"
            src={rizki}
            alt="rizqi"
          />
        </div>
        <h3 className="text-xl font-normal text-center text-gray-800">Rizki <br/> R2636YB450</h3>
      </div>
      </div>
        </main>
  
        <footer className="bg-gray-800 text-white py-6 mt-8">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">TravelMate</h3>
              <p className="text-gray-400">Temukan destinasi wisata di seluruh indonesia hanya melalui satu platform saja</p>
              <p className="text-gray-400 mt-4">copyright © 2024 TravelMate</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Menu</h3>
              <ul>
                <li><a href="/" className="text-gray-400 hover:text-white">Beranda</a></li>
                <li><a href="#jenis-pariwisata" className="text-gray-400 hover:text-white">Wisata</a></li>
                <li><a href="#artikel-terbaru" className="text-gray-400 hover:text-white">Artikel Terbaru</a></li>
                <li><a href="#tentang-kami" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Kontak</h3>
              <p className="text-gray-400">+62895806709715</p>
              <p className="text-gray-400">travelmate@gmail.com</p>
            </div>
          </div>
        </footer>
      </div> 
    )
    
}

export default Homepage