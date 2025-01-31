import React, { useState, useEffect } from "react";
import moi from '../assets/moi2.png';
import { Link } from 'react-router-dom';
import WVkarrusel from '../assets/WVForside.jpg';
import WVkarruselM from '../assets/WVMobil.jpg';
import WVkarrusel2 from '../assets/NeglementetForside.jpg';
import WVkarrusel2M from '../assets/NeglementetMobil.jpg';
import mig2 from '../assets/neglepng.png';

const Forside = () => {
    const divs = [
        {
          id: "div1",
          content: (
            <Link to="/Projekter">
            <div className="FKramme">
              <img src={WVkarrusel} className="FKimg laptop"></img>
              <img src={WVkarruselM} className="FKimg mobil"></img>
              <h3>Walthers Vintage</h3>
            </div>
            </Link>
          ),
        },
        {
          id: "div2",
          content: (
            <Link to="/Projekter">
            <div className="FKramme">
                <img src={WVkarrusel2} className="FKimg laptop"></img>
                <img src={WVkarrusel2M} className="FKimg mobil"></img>
                <h3>Neglementet</h3>
            </div>
            </Link>
          ),
        },
        {
          id: "div3",
          content: (
            <div className="FKramme">
              <h2>Div 3</h2>
              <p>Indhold for div 3</p>
            </div>
          ),
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Automatisk rotation
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % divs.length); // Næste div
        }, 3000); // Skift hvert 3. sekund
    
        return () => clearInterval(interval); // Ryd intervallet op
      }, [divs.length]);
    
      // Beregn klassens navn baseret på position
      const getClassName = (index) => {
        if (index === currentIndex) return "FKramme active"; // Midten
        if (index === (currentIndex - 1 + divs.length) % divs.length) return "FKramme left"; // Venstre
        if (index === (currentIndex + 1) % divs.length) return "FKramme right"; // Højre
        return "FKramme"; // Alt andet
      };


    return (
        <div>
            <div className="ForsideTop laptop">
                <div id="FTvenstre">
                    <h2>Sarahs</h2>
                </div>
                <div id="FThøjre">
                    <h1 id="port">Port</h1>
                    <div id="evner">
                        <p>FRONTEND</p>
                        <p>GRAFISK DESIGN</p>
                        <p>CONTENT</p>
                    </div>
                    <h1 id="folio">folio</h1>
                </div>
            </div>

            <div id="mobilForside">
                <div className="ForsidetopMobil mobil">
                    <h2>Sarahs</h2>
                    <h1>Port</h1>
                </div>
                <div className="Forsidetop2Mobil mobil">
                    <img src={moi} className="moimobil"></img>
                    <div id="FT2txt">
                        <p>FRONTEND</p>
                        <p id="p2">GRAFISK DESIGN</p>
                        <p id="p3">CONTENT</p>
                        <h1>folio</h1>
                    </div>
                </div>
            </div>
            <div id="txtbox01">
                <h3 className="storh3">01.</h3>
                <div>
                    <p>Hvis du er interesseret i at se, hvad jeg har lavet i og udenfor skolen, så kig mine projekter igennem her. </p>
                    <Link className="btn" to="/Projekter">Projekter</Link>
                </div>
            </div>

            <div id="forside-karrusel-wrapper">
            {divs.map((div, index) => (
                <div key={div.id} id={div.id} className={`${getClassName(index)}`}>
                {div.content}
                </div>
            ))}
            </div>
            
            <div id="txtbox02">
                <img src={mig2} id="Fimg2"></img>
                <div id="textramme02">
                    <div id="txt02-01">
                        <h1>6</h1>
                        <p>Hvis du søger en, der er</p>
                        <ul>
                            <li>lærenem</li>
                            <li>positiv</li>
                            <li>ambitiøs</li>
                            <li>effektiv</li>
                            <li>udtryksfuld</li>
                        </ul>
                        <p>Så læs mere om, hvem jeg egentlig er <br />ªher :)</p>
                    </div>
                    <div id="txt02-02">
                        <h3 className="storh3">02.</h3>
                        <Link to="/Om" className="btn">Om mig</Link>
                    </div>
                </div>
            </div>

            <div id="txt03">
                <div id="mailtxt">    
                    <h3 className="storh3">03.</h3>
                    <p>Hvis du tænker, jeg kan bidrage med noget sejt eller bare gerne vil høre mere, så hold dig endelig ikke tilbage! </p>
                </div>
                <a a href="mailto:sarahboddum@gmail.com" id="mail">
                    <h1>sarahboddum<span id="snabela">@</span>gmail.com</h1>
                </a>
            </div>

        </div>
    );
};

export default Forside;