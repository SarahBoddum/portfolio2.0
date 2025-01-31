import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo2.png';

export default function Navigation() {    
    const [burgerActive, setBurgerActive] = useState(false); 
    const toggleBurger = () => {
        setBurgerActive(!burgerActive);
    }

    const [krydsActive, setKrydsActive] = useState(false);
    const toggleKryds = () => {
        setKrydsActive(!krydsActive);
    }

    const [linkActive, setLinkActive] = useState(false);
    const toggleDropdown = () => {
        setLinkActive(!linkActive);
    }
     // Effekt: Lås scrolling, når burger-menuen er aktiv
     useEffect(() => {
        if (burgerActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Ryd op ved unmount
        return () => {
            document.body.style.overflow = "";
        };
    }, [burgerActive]);

    return (
        <nav className="navigation" id="navbar">
            <NavLink className={"navlink"} to="/" onClick={toggleBurger}><img src={logo} id="logo" alt="Logo" loading="lazy"></img></NavLink>
            

            <div className={krydsActive ? 'close' : null} onClick={() => {
                toggleBurger();
                toggleKryds();
            }} id="burger-menu">
                <span></span>
            </div>
            
            <div id="menu" className={burgerActive ? 'overlay' : null}> 
                <div id="xul">
                    <h1 className="sprinkle mobil">2</h1>
                    <NavLink className="navlink" to="/Projekter" onClick={toggleBurger}>Projekter</NavLink>
                    <NavLink className="navlink" to="/Om" onClick={toggleBurger}>Om Mig </NavLink>
                    <NavLink className="navlink" to="/Kontakt" onClick={toggleBurger}>Kontakt</NavLink>
                </div>
            </div>
        </nav>   
    );
}