import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import SideProjects from "./SideProjects";
import VisualMerchandising from "./VisualMerchandising";
import About from "./About";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />  {/* 默认展示 Landing 页面 */}
                <Route
                  path="/home"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
                <Route
                  path="/Projects"
                  element={
                    <>
                      <Header />
                      <Projects />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/SideProjects"
                  element={
                    <>
                      <Header />
                      <SideProjects />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/VisualMerchandising"
                  element={
                    <>
                      <Header />
                      <VisualMerchandising />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/About"
                  element={
                    <>
                      <Header />
                      <About />
                      <Footer />
                    </>
                  }
                />
            </Routes>
        </Router>
    );
}

export default App;
