import './Header.css';
import {Bell, Zap} from 'lucide-react';

export function Header(){
    return(
        <header className='vortex-header'>
            <div className="user-info">
                <h3 className="destaque">Bem-Vindo, <span className= "destaque">Ana Julya</span></h3>
                <p>Status: Online no Level 01</p>
            </div>

            <div className="header-actions">
                <div className="badge">
                    <zap size={14}/>
                    <span>PRO PLAYER</span>

                </div>
                <button className="notificacoes">
                    <Bell size={20}/>
                </button>

            </div>

        </header>
    )
}