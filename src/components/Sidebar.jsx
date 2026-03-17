import './Sidebar.css'
import { LayoutDashboard, Gamepad2, User } from 'lucide-react';

export function Sidebar() {
    return (
        <aside className="vortex-Sidebar">
            <h2 className="logo">VORTEX</h2>
            <nav>
                <div className="nav-item active"> <LayoutDashboard size={20} />Dashbord</div>
                <div className="nav-item"> <Gamepad2 size={20} />Meu jogo</div>
                <div className="nav-item"> <User size={20} />Perfil</div>
            </nav>

        </aside>
    )
}

export default Sidebar;