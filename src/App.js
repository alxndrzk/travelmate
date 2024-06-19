import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/index.css';
import Register from './Pages/register.jsx';
import Login from './Pages/Login.jsx';
import Homepage from './Pages/homepage.jsx';
import WisataKulinerPage from './Pages/wisata/page-wisata/WisataKulinerPage.jsx';
import WisataAlamPage from './Pages/wisata/page-wisata/WisataAlamPage.jsx';
import WisataBudayaPage from './Pages/wisata/page-wisata/WisataBudayaPage.jsx';
import WisataKesenianPage from './Pages/wisata/page-wisata/WisataKesenianPage.jsx';
import WisataPendidikanPage from './Pages/wisata/page-wisata/WisataPendidikanPage.jsx';
import WisataReligiPage from './Pages/wisata/page-wisata/WisataReligiPage.jsx';
import DetailWisataAlamPage from './Pages/wisata/detail-wisata/DetailWisataAlamPage.jsx';
import DetailWisataBudayaPage from './Pages/wisata/detail-wisata/DetailWisataBudayaPage.jsx';
import DetailWisataKesenianPage from './Pages/wisata/detail-wisata/DetailWisataKesenianPage.jsx';
import DetailWisataKulinerPage from './Pages/wisata/detail-wisata/DetailWisataKulinerPage.jsx';
import DetailWisataPendidikanPage from './Pages/wisata/detail-wisata/DetailWisataPendidikan.jsx';
import DetailWisataReligiPage from './Pages/wisata/detail-wisata/DetailWisataReligiPage.jsx';
import ReadArticlePage from './Pages/article/ReadArticlePage.jsx';
import AddArticlePage from './Pages/article/AddArticlePage.jsx';
import DetailArticlePage from './Pages/article/DetailArticlePage.jsx';

function App() {
  return (
    <main>
      <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/beranda" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/wisata/kuliner' element={<WisataKulinerPage/>}/>
        <Route path='/wisata/alam' element={<WisataAlamPage/>}/>
        <Route path='/wisata/budaya' element={<WisataBudayaPage/>}/>
        <Route path='/wisata/kesenian' element={<WisataKesenianPage/>}/>
        <Route path='/wisata/pendidikan' element={<WisataPendidikanPage/>}/>
        <Route path='/wisata/religi' element={<WisataReligiPage/>}/>
        <Route path='/artikel/lihat-artikel' element={<ReadArticlePage/>}/>
        <Route path='/artikel/tambah-artikel' element={<AddArticlePage/>}/>

        <Route path='/wisata/kuliner/:id' element={<DetailWisataKulinerPage/>}/>
        <Route path='/wisata/alam/:id' element={<DetailWisataAlamPage/>}/>
        <Route path='/wisata/kesenian/:id' element={<DetailWisataKesenianPage/>}/>
        <Route path='/wisata/pendidikan/:id' element={<DetailWisataPendidikanPage/>}/>
        <Route path='/wisata/religi/:id' element={<DetailWisataReligiPage/>}/>
        <Route path='/wisata/budaya/:id' element={<DetailWisataBudayaPage/>}/>
        <Route path='/artikel/:id' element={<DetailArticlePage/>}/>
      </Routes>
    </Router>
    </main>
  );
}

export default App;
