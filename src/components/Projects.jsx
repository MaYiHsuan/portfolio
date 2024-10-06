import React from "react";
import Featurette from './Featurette';
import { featurettes } from './projectsData';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../public/styles.css";

function Projects() {
    return (
        <main>
            <div className="container marketing" style={{marginTop: '90px'}}>
            <div className="row align-items-center mb-4" style={{ height: '150px' }}>
                <div className="col-md-8">
                    <h1 className="display-4 mb-2">Projects</h1>
                    <h2 lang="zh" className="chinese-text h4 mb-2">團體和個人作品</h2>
                    <p lang="zh" className="chinese-text text-muted">畢業製作 / UI/UX / 網站前端 / AR互動設計 / 活動視覺設計 / 包裝設計 / 識別設計 / 雜誌設計</p>
                    
                </div>
            </div>
            <hr />
                {featurettes.map((featurette, index) => (
                    <React.Fragment key={index}>
                        <Featurette {...featurette} />
                        {index < featurettes.length - 1 && (
                            <hr className="featurette-divider" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </main>
    );
}

export default Projects;