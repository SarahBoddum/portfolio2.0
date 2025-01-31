import React from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Projekter from './pages/Projekter';
import Om from './pages/Om';
import Kontakt from './pages/Kontakt';
import Forside from './pages/Forside';


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
     <Navigation />
     <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/Projekter" element={<Projekter />} />
        <Route path="/Om" element={<Om/>} />
        <Route path="/Kontakt" element={<Kontakt/>} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;