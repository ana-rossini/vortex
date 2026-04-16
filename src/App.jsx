import React, { useState, useEffect } from "react"; // Adicionado o import do useState
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { gameData } from "./data/games";
import { GameCard } from "./components/GameCard";
import AOS from 'aos';
import "aos/dist/aos.css";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('dash');
  const filteredGames = gameData.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once:false,
        easing: "ease-in-out",
      })
    })
  
    if (activeTab === "favorites") {
      return matchesSearch && game.isFavorite; 
    }
    
    return matchesSearch;
  });

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>

      <main className="vortex-main">
        <Header search={search} setSearch={setSearch} />

        <div className="vortex-content">
          <h2 className="section-title">
            {/* Corrigida a sintaxe das aspas abaixo */}
            {activeTab === 'dash' && 'Dashboard'}
            {activeTab === 'favorites' && 'Favoritos'}
            {activeTab === 'profile' && 'Perfil'}
            
            <small style={{ marginLeft: '10px', fontSize: '0.6em', opacity: 0.8 }}>
              {search ? ` | Resultados para: ${search}` : ' | Todos os Jogos'}
            </small>
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
                />
              ))
            ) : (
              <p className="no-results">Nenhum jogo encontrado.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}