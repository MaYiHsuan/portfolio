import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/styles.css';

function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-4">Cindy's Portfolio</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li className="nav-item"><Link to="/Projects" className="nav-link">Projects</Link></li>
                    <li className="nav-item"><Link to="/SideProjects" className="nav-link">Side Projects</Link></li>
                    <li className="nav-item"><Link to="/VisualMerchandising" className="nav-link">Visual Merchandising</Link></li>
                    <li className="nav-item"><Link to="/Resume" className="nav-link">Resume</Link></li>
                    <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
