import React from "react";
import kids from '../assets/kids.jpg';
import oomhjakke from '../assets/oomhJakke.jpg';
import cvLaptop from '../assets/sløjfeCV-laptop.svg';
import cvTablet from '../assets/sløjfeCV-tablet.svg';
import cvMobil from '../assets/sløjfeCV-mobil.svg';
import { Link } from "react-router-dom";

const Om = () => {
    return (
        <div>
            <div id="Omtop">
                <div id="h3-ramme">    
                    <Link to="/Om#koncept" className="h3link">SARAH</Link>
                    <Link to="/Om#soger" className="h3link">HVAD JEG SØGER</Link>
                    <Link to="/Om#CV" className="h3link">CV</Link>
                    <Link to="/Om#siger" className="h3link">ANDRE SIGER...</Link>
                </div>
                <h1 id="Om">Om</h1>
                <h1 id="Mig">mig</h1>
            </div>

            <div className="koncept" id="koncept">
                <div className="konceptTxt">
                    <h2>Sarah</h2>
                    <p>I januar 2025 blev jeg færdig med min anden uddannelse - nu som multimediedesigner. Jeg har mange års designerfaring, da jeg også har en PBA i Fashion Design fra 2015 og har været selvstændig designer under navnet OutOfMyHand siden da. I den tid har jeg også fået et par børn og jeg venter mit tredje til april 2025. Jeg har altid været effektiv, men min oplevelse er, at jeg er blevet endnu mere målrettet og arbejdsom efter jeg er blevet mor, fordi jeg ikke længere har ubegrænset tid til mine egne projekter
                        <br /><br />
                    I mig får I en kollega, der kan tale med de fleste. Min yngste veninde er 19 og min ældste er over 50. Jeg er nysgerrig, positivt indstillet og har 1000 forskellige hobbyer og interesser, så jeg finder hurtigt noget at snakke med nye mennesker om.

                    </p>
                </div>
                <div className="konceptImg">
                <img src={oomhjakke} className="cirkelImg" alt="Lyserød jakke fra OutOfMyHand"></img>
                    <img src={kids} className="Ovalimg" alt="Mine børn"></img>
                </div>
            </div>

            <div id="soger">
                <div id="h2soger">
                    <h2>Hvad jeg</h2>
                    <h2>6</h2>
                </div>
                <div id="sogertxt">
                    <h2>søger</h2>
                    <p>Min helt store passion er at skabe ting. Jeg ligner ved første øjekast måske en designer - og det er ikke forkert, men det er det at give form, jeg elsker. Hvad end det er at sy et stykke tøj eller at kode og se et site tage form. Min store drøm er at blive en lige så dygtig frontender som jeg er skrædder i dag. 
                    <br /> <br />
                    Så kort sagt så drømmer jeg om et job, hvor jeg kan få lov til at kode og lære af folk, der har mere erfaring end jeg selv har nu. Jeg motiveres allermest af ting, der er svære og kan lære mig noget nyt og er ikke tilbageholdende med selv at opsøge tekniske løsninger, der ligger udover det, jeg kan i forvejen.</p>
                </div>
            </div>

            <div id="CV">
                <h2>Sløjfen <br/ > på mit CV 2</h2>
                <img src={cvLaptop} alt="cv formet som en sløjfe" id="cv-laptop"></img>
                <img src={cvTablet} alt="cv formet som en sløjfe" id="cv-tablet"></img>
                <img src={cvMobil} alt="cv formet som en sløjfe" id="cv-mobil"></img>
            </div>

            <div id="siger">
                <h2>Andre siger...</h2>
                <div id="quotes">
                    <div className="anbefaling" id="eaaa">
                        <h3>ERHVERVSAKADEMI <br />AARHUS</h3>
                        <p className="underoverskrift">Lærerteamet</p>
                        <p>
                        Sarah er en dygtig, kreativ og ambitiøs studerende, som favner bredt i alle uddannelsens aspekter. Sarah er kendetegnet ved at være energisk og arbejdsom, samtidig med at hun vægter det gode samarbejde højt. 
                        <br /><br />
                        Sarah er kritisk omkring hvad hun vil arbejde med, og hun vil noget, som ikke skader planeten [jf. at have valgt modebranchen fra] - uden at give afkald på det æstetiske element. Vi ønsker Sarah alt det bedste fremover. 
                        </p>
                    </div>
              
                    <div className="anbefaling" id="moluu">
                        <h3>KATHRINE JUUL</h3>
                        <p className="underoverskrift">Praktikleder moluu og kollega</p>
                        <p>
                        Jeg har haft fornøjelsen af at have Sarah Boddum i praktik i 9 uger. Sarah har været en stor hjælp på mange måder. Hun er håndværksmæssigt dygtig og har derfor kunnet arbejde selvstændigt med en stillet opgave og har afleveret et godt stykke arbejde. Hun er meget engageret, tålmodig og arbejdsom. 
                        <br /><br />
                        Derudover er hun en skøn kollega - med let til smil/grin samt en stor interesse i verden omkring hende- så der er altid grobund for en interessant samtale. Jeg giver hermed Sarah mine varmeste anbefalinger.
                        </p>
                    </div>

                    <div className="anbefaling" id="moluu">
                        <h3>KATHRINE JUUL</h3>
                        <p className="underoverskrift">Praktikleder moluu og kollega</p>
                        <p>
                        Jeg har haft fornøjelsen af at have Sarah Boddum i praktik i 9 uger. Sarah har været en stor hjælp på mange måder. Hun er håndværksmæssigt dygtig og har derfor kunnet arbejde selvstændigt med en stillet opgave og har afleveret et godt stykke arbejde. Hun er meget engageret, tålmodig og arbejdsom. 
                        <br /><br />
                        Derudover er hun en skøn kollega - med let til smil/grin samt en stor interesse i verden omkring hende- så der er altid grobund for en interessant samtale. Jeg giver hermed Sarah mine varmeste anbefalinger.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Om;