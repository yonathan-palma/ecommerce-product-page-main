import { useState } from "react";
import './Header.css'
import logo from "../../assets/images/logo.svg"

export default function Header({children}){

    const [checkMenu, setCheckMenu] = useState(false); 

    const buttonClassName = checkMenu ? 'show' : '';
    
    return (
        <header className="Header">
            <nav className="navbar">
                <div className="container-fluid">
                    <button className={`navbar-toggler ${buttonClassName}`} 
                        onClick={()=>{ setCheckMenu(!checkMenu) }} 
                        type="button"
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <div className="navbar_brand">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={`collapse navbar-collapse ${buttonClassName}`}>
                        <ul className="nav-item">
                            <li className="nav-link">
                                <a href="#">Collections</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Men</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">Woman</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">About</a>
                            </li>
                            <li className="nav-link">
                                <a href="#">contact</a>
                            </li>
                        </ul>
                        <div 
                            className={`backdrop_fade ${buttonClassName}`}
                            onClick={()=>{ setCheckMenu(!checkMenu) }} 
                        >
                        </div>
                    </div>
                </div>
                {children}
            </nav>
        </header>
    );
}