import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Styles/index.css';
import Register from './Pages/register.jsx';
import Login from './Pages/Login.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
