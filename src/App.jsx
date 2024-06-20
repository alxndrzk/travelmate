import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/index.css';
import React, { useState, useEffect } from "react";
import { getUsers, getPariwisata, getArticles } from './Utils/Api'
import Register from './Pages/register.jsx';
import Login from './Pages/Login.jsx';
import Homepage from './Pages/homepage.jsx';
import Admin from './Pages/Admin';
import DetailWisataAlamPage from './Pages/wisata/detail-wisata/DetailWisataAlamPage.jsx';
import DetailWisataBudayaPage from './Pages/wisata/detail-wisata/DetailWisataBudayaPage.jsx';
import DetailWisataKesenianPage from './Pages/wisata/detail-wisata/DetailWisataKesenianPage.jsx';
import DetailWisataKulinerPage from './Pages/wisata/detail-wisata/DetailWisataKulinerPage.jsx';
import DetailWisataPendidikanPage from './Pages/wisata/detail-wisata/DetailWisataPendidikan.jsx';
import DetailWisataReligiPage from './Pages/wisata/detail-wisata/DetailWisataReligiPage.jsx';
import ReadArticlePage from './Pages/article/ReadArticlePage.jsx';
import AddArticlePage from './Pages/article/AddArticlePage.jsx';
import DetailArticlePage from './Pages/article/DetailArticlePage.jsx';
import Wisata from './Pages/wisata/Wisata';

function App() {
  const [users, setUsers] = useState([]);
  const [pariwisata, setPariwisata] = useState([]);
  const [articles, setArticles] = useState([]);
  const fetchData = async () => {
    try {
      const usersData = await getUsers();
      setUsers(usersData);
      const pariwisataData = await getPariwisata();
      setPariwisata(pariwisataData);
      const articlesData = await getArticles();
      setArticles(articlesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/beranda" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* admin */}
        <Route path="/admin" element={<Admin />} />
        {/* wisata */}
        <Route path='/wisata/budaya' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Budaya')}/>}/>
        <Route path='/wisata/kuliner' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Kuliner')}/>}/>
        <Route path='/wisata/alam' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Alam')}/>}/>
        <Route path='/wisata/pendidikan' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Pendidikan')}/>}/>
        <Route path='/wisata/kesenian' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Kesenian')}/>}/>
        <Route path='/wisata/religi' element={<Wisata wisata={pariwisata.filter(item => item.category === 'Religi')}/>}/>
        {/* wisata detail */}
        <Route path='/wisata/kuliner/:id' element={<DetailWisataKulinerPage/>}/>
        <Route path='/wisata/alam/:id' element={<DetailWisataAlamPage/>}/>
        <Route path='/wisata/kesenian/:id' element={<DetailWisataKesenianPage/>}/>
        <Route path='/wisata/pendidikan/:id' element={<DetailWisataPendidikanPage/>}/>
        <Route path='/wisata/religi/:id' element={<DetailWisataReligiPage/>}/>
        <Route path='/wisata/budaya/:id' element={<DetailWisataBudayaPage/>}/>
        {/* article */}
        <Route path='/artikel/:id' element={<DetailArticlePage/>}/>
        <Route path='/artikel/lihat-artikel' element={<ReadArticlePage/>}/>
        <Route path='/artikel/tambah-artikel' element={<AddArticlePage/>}/>
      </Routes>
    </Router>
    </main>
  );
}

export default App;
