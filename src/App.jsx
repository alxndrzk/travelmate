import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './Styles/index.css';
import React, { useState, useEffect } from "react";
import { getUsers, getPariwisata, getArticles } from './Utils/Api';
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
import Pengaturan from './Components/Pengaturan';
import ArtikelList from './Components/ArtikelList';
import AboutUs from './Components/AboutUs';

function App() {
  const [users, setUsers] = useState([]);
  const [pariwisata, setPariwisata] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/beranda" /> : <Register />} />
          <Route path="/beranda" element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/beranda" /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to="/beranda" /> : <Register />} />
          {/* admin */}
          <Route path="/admin" element={isLoggedIn ? <Admin /> : <Navigate to="/login" />} />
          {/* wisata */}
          <Route path='/wisata/budaya' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Budaya')} /> : <Navigate to="/login" />} />
          <Route path='/wisata/kuliner' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Kuliner')} /> : <Navigate to="/login" />} />
          <Route path='/wisata/alam' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Alam')} /> : <Navigate to="/login" />} />
          <Route path='/wisata/pendidikan' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Pendidikan')} /> : <Navigate to="/login" />} />
          <Route path='/wisata/kesenian' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Kesenian')} /> : <Navigate to="/login" />} />
          <Route path='/wisata/religi' element={isLoggedIn ? <Wisata wisata={pariwisata.filter(item => item.category === 'Religi')} /> : <Navigate to="/login" />} />
          {/* wisata detail */}
          <Route path='/wisata/kuliner/:id' element={isLoggedIn ? <DetailWisataKulinerPage /> : <Navigate to="/login" />} />
          <Route path='/wisata/alam/:id' element={isLoggedIn ? <DetailWisataAlamPage /> : <Navigate to="/login" />} />
          <Route path='/wisata/kesenian/:id' element={isLoggedIn ? <DetailWisataKesenianPage /> : <Navigate to="/login" />} />
          <Route path='/wisata/pendidikan/:id' element={isLoggedIn ? <DetailWisataPendidikanPage /> : <Navigate to="/login" />} />
          <Route path='/wisata/religi/:id' element={isLoggedIn ? <DetailWisataReligiPage /> : <Navigate to="/login" />} />
          <Route path='/wisata/budaya/:id' element={isLoggedIn ? <DetailWisataBudayaPage /> : <Navigate to="/login" />} />
          {/* article */}
          <Route path='/artikel/:id' element={isLoggedIn ? <DetailArticlePage /> : <Navigate to="/login" />} />
          <Route path='/beranda/artikel' element={isLoggedIn ? <ArtikelList articles={articles} /> : <Navigate to="/login" />} />
          <Route path='/beranda/artikel/tambahArtikel' element={isLoggedIn ? <AddArticlePage articles={articles}/> : <Navigate to="/login" />} />
          {/* user */}
          <Route path='/pengaturan' element={isLoggedIn ? <Pengaturan /> : <Navigate to="/login" />} />
          <Route path='/about' element={isLoggedIn ? <Homepage /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
