import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Instruction from './pages/About/Instruction';
import Composition from './pages/About/Composition';
import Action from './pages/About/Action';
import Contraindications from './pages/About/Contraindications';
import Pregnancy from './pages/Uses/Pregnancy';
import Children from './pages/Uses/Children';
import Allergy from './pages/Uses/Allergy';
import Poisoning from './pages/Uses/Poisoning';
import Diarrhea from './pages/Uses/Diarrhea';
import SkinIssues from './pages/Uses/SkinIssues';
import Library from './pages/Library';
import FAQ from './pages/FAQ';
import Reviews from './pages/Reviews';
import WhereToBuy from './pages/WhereToBuy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/composition" element={<Composition />} />
          <Route path="/action" element={<Action />} />
          <Route path="/contraindications" element={<Contraindications />} />
          <Route path="/pregnancy" element={<Pregnancy />} />
          <Route path="/children" element={<Children />} />
          <Route path="/allergy" element={<Allergy />} />
          <Route path="/poisoning" element={<Poisoning />} />
          <Route path="/diarrhea" element={<Diarrhea />} />
          <Route path="/skin-issues" element={<SkinIssues />} />
          <Route path="/library" element={<Library />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;