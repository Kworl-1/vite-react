import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Boost from './components/Boost';
import Leaderboard from './components/Leaderboard';
import './App.css'; // Создайте при необходимости стили

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/game">Game</Link></li>
                    <li><Link to="/boost">Boost</Link></li>
                    <li><Link to="/leaderboard">Leaderboard</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/boost" element={<Boost />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </Router>
    );
}

export default App;
