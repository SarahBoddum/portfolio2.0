import React, { useState } from "react";
import filterSvg from "../assets/filter.svg";
import ProjektData from "../Data/Projekter.json";
import wvImg from "../assets/RjakkeV1.jpg";
import NegleImg from "../assets/MforsideQ.jpg";
import BilleImg from "../assets/walking.jpg";
import Billepik from "../assets/billepik2.jpeg"
import { Link } from "react-router-dom";

const Project1 = () => (
  <Link to="/Walther" className="projekt">
    <div className="iframe-container">
        <img src={wvImg} alt="Walthers Vintage" className="OvalProjektImg"/>
        <iframe src="https://walthersvintage.outofmyhand.dk/" class="hidden-iframe"></iframe>
    </div>
    <h3>WALTHERS VINTAGE</h3>
    <p>Hovedopgave, MDU</p>
  </Link>
);

const Project2 = () => (
  <Link className="projekt">
    <div className="iframe-container">
        <img src={NegleImg} alt="Neglementet forside" className="ProjektImg"/>
        <iframe src="https://neglementet.outofmyhand.dk/index.html" class="hidden-iframe"></iframe>
    </div>
    <h3>NEGLEMENTET</h3>
    <p>2. Semester Eksamen</p>
  </Link>
);

const Project3 = () => (
    <Link className="projekt">
        <div className="iframe-container">
            <img src={BilleImg} alt="Neglementet forside" className="ProjektImg"/>
            <img src={Billepik} class="hidden-iframe frame"></img>
        </div>
        <h3>BILLEWHO</h3>
        <p>Interaktiv Storytelling</p>
    </Link>
);

const components = {
  project1: Project1,
  project2: Project2,
  project3: Project3,
};

const Projekter = () => {
  const [filter, setFilter] = useState("");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // 🔥 RETTET HER: Tilgå `ProjektData.projekter`
  const filteredProjects = ProjektData.projekter.filter(
    (project) => filter === "" || project.tags.includes(filter)
  );

  return (
    <div>
      <div id="projekter">
        <h1>Projekter</h1>
      </div>
      <div id="filtre">
        <div id="filterIkon" onClick={toggleFilter} style={{ cursor: "pointer" }}>
          <img src={filterSvg} alt="filter ikon" />
          <h3>FILTRE</h3>
        </div>
        <div id="filterTags" className={isFilterVisible ? "visible" : ""}>
          <ul id="filterUL">
            <li onClick={() => setFilter("")}>Alle</li>
            <li onClick={() => setFilter("frontend")}>Frontend</li>
            <li onClick={() => setFilter("grafisk design")}>Grafisk Design</li>
            <li onClick={() => setFilter("bæredygtigt webdesign")}>Bæredygtigt webdesign</li>
            <li onClick={() => setFilter("billedoptimering")}>Billedoptimering</li>
            <li onClick={() => setFilter("content")}>Content</li>
          </ul>
        </div>
      </div>

      <div id="projektRamme">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            {React.createElement(components[project.id])}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Projekter;
