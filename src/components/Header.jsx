import { useState } from 'react'; // 1. Importação do Hook de estado
import { Bell, Zap, Search } from 'lucide-react'; // 2. Importado o ícone Search
import './Header.css';

export function Header() {
    const [search, setSearch] = useState("");

    return (
        <header className='vortex-header'>
            <div className="user-info">
                <h3 className="destaque">Bem-Vindo, <span>Ana Julya</span></h3>
                <p>Status: Online no Level 01</p>
            </div>

            <div className="search-bar">
                <Search size={18} color='white'/>
                <input
                    type="text"
                    placeholder="Buscar Jogos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>

            <div className="header-actions">
                <div className="badge">
                    <Zap size={14}/>
                    <span>PRO PLAYER</span>
                </div>
                <button className="notificacoes" aria-label="Notificações">
                    <Bell size={20}/>
                </button>
            </div>
        </header>
    );
}