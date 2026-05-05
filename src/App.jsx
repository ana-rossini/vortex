import { useState, useEffect } from 'react';
import { Header } from './components/header';
import { gameData } from "./data/games";
import { GameCard } from './components/GameCard';
import { GameModal } from "./components/GameModal";
import Sidebar from './components/Sidebar';
import AOS from 'aos';
import "aos/dist/aos.css"
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]);

  const [selectedGame, setSelectedGame] = useState(null);

  const filteredGames = gameData
    .filter((game) => activeTab === "dash" ? game : favorites.includes(game.id))
    .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));

  function toogleFavorite(gameId) {
    setFavorites(favorites.includes(gameId) ? favorites.filter((id) => id !== gameId) : [...favorites, gameId])
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className='vortex-app'>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} />

        <div className="vortex-content">

          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorites" && "Favoritos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          <div className="vortex-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((g, index) => (
                <GameCard
                  key={g.id}
                  title={g.title}
                  category={g.category}
                  banner={g.banner}
                  index={index}
                  isFavorite={favorites.includes(g.id)}
                  onFavorite={() => toogleFavorite(g.id)}
                  onPlay={() => setSelectedGame(g)}
                />
              ))
            ) : (
              <p style={{ color: "#94a3b8" }}>
                Nenhum filme encontrado....
              </p>
            )}
          </div>

        </div>
      </main>

      {selectedGame && (
        <GameModal
          game={selectedGame}
          onClose={() => setSelectedGame(null)}
        />
      )}
    </div>
  );
}

export default App;
