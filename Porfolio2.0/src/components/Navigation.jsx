import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo2.png';

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
    }

    const updateWindowSize = () => {
        setIsMobile(window.innerWidth < 1100);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
        return () => window.removeEventListener("resize", updateWindowSize);
    }, []);

    useEffect(() => {
        if (isMobile && burgerActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [burgerActive, isMobile]); 

    return (
        <nav className="navigation" id="navbar">
            <NavLink className="navlink" to="/" onClick={toggleBurger}>
                <img src={logo} id="logo" alt="Logo" loading="lazy" />
            </NavLink>

            {isMobile && (
                <div onClick={toggleBurger} id="burger-menu">
                    <span></span>
                </div>
            )}

            <div id="menu" className={burgerActive ? 'overlay' : null}> 
                <div id="xul">
                    <h1 className="sprinkle mobil">2</h1>
                    <NavLink className="navlink" to="/Projekter" onClick={toggleBurger}>Projekter</NavLink>
                    <NavLink className="navlink" to="/Om" onClick={toggleBurger}>Om Mig</NavLink>
                    <NavLink className="navlink" to="/Kontakt" onClick={toggleBurger}>Kontakt</NavLink>
                </div>
            </div>
        </nav>   
    );
}
