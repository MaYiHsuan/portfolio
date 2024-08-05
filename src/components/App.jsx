import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; // 調整路徑根據你的目錄結構
import Home from './Home';
import Projects from './Projects';
import SideProjects from './SideProjects';
import VisualMerchandising from './VisualMerchandising';
import Resume from './Resume';
import About from './About';

function App() {
    return (
        <Router>
            <Header />
            <Home />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/SideProjects" element={<SideProjects />} />
                <Route path="/VisualMerchandising" element={<VisualMerchandising />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;
