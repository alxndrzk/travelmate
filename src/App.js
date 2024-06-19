import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/index.css';
import Register from './Pages/register.jsx';
import Login from './Pages/Login.jsx';
import Homepage from './Pages/homepage.jsx';
import Admin from './Pages/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
