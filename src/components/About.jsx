import React from "react";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import SouthIcon from '@mui/icons-material/South';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FavoriteIcon from '@mui/icons-material/Favorite';

import "../../public/styles.css";

function About() {
    return (
    <div className="container" style={{marginTop: '90px'}}>
        <div className="row mb-4">
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Avatar alt="Cindy" src="/portfolio/public/images/cindy/大頭照.jpg" sx={{ width: 200, height: 200 }}/>
            </div>
            <div>
                <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'center', fontSize: '35px'}}>
                    <AutoAwesomeIcon style={{fontSize: 'medium'}}/>About Cindy<AutoAwesomeIcon style={{fontSize: 'medium'}}/>
                </p>
                <p lang="zh" className="chinese-text" style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                    Hi! 我是馬苡瑄 (Cindy)，出生於2001.05.13，畢業於銘傳大學-商業設計學系，<br />
                    目標是成為一位跨領域的台灣設計師，並在多個設計領域中不斷成長和挑戰自己，<br />
                    因為設計對於我來說是連結生活的方式，可以用不同的角度去探索世界，
                </p>
                <p lang="zh" className="chinese-text" style={{display: 'flex', justifyContent: 'center', lineHeight: '0px'}}>
                    在未來我將持續學習和探索
                     <span className="dots-animation"></span>
                </p>
            </div>
            <div style={{ width: '1332px', height: '300px', overflow: 'hidden', marginTop: '30px', marginBottom: '50px' }}>
                <img src="/portfolio/public/images/photo.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="dm-serif-display-regular" style={{
                    position: 'absolute',
                    bottom: '2px', // Adjust the position as needed
                    right: '0%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    fontSize: '15px',
                    textAlign: 'right',
                    padding: '2px', // Optional: Adds padding around the text
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
                }}>
                    <FavoriteIcon style={{marginRight: '8px', fontSize: 'medium'}}/>Photography/ Painting/ Traveling
                </div>
            </div>
            <div>
                <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '35px'}}>
                        <SouthIcon style={{marginRight: '8px'}}/>Rewards<SouthIcon style={{marginLeft: '8px'}}/>
                    </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <div style={{textAlign: 'center', fontSize: '20px', lineHeight: '40px'}}>
                        <p lang="zh" className="chinese-text">
                            <span>iF DESIGN STUDENT AWARD 2023</span><br />
                            <span>Red Dot Winner 2023 Best of the Best</span><br />
                            <span>XR 實境教育創意大賞 主獎項 佳作</span><br />
                            <span>台灣原住民海報創作競賽 佳作</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '40px'}}>
                <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '35px'}}>
                        <SouthIcon style={{marginRight: '8px'}}/>Certifications<SouthIcon style={{marginLeft: '8px'}}/>
                    </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <div style={{textAlign: 'center', fontSize: '20px', lineHeight: '40px'}}>
                        <p lang="zh" className="chinese-text">
                            <span>Illustrator CC</span><br />
                            <span>PowerPoint 2016 實用型</span><br />
                            <span>色彩規劃管理師(色彩計畫) 初級能力鑑定</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '40px'}}>
                <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '35px'}}>
                        <SouthIcon style={{marginRight: '8px'}}/>Skills<SouthIcon style={{marginLeft: '8px'}}/>
                    </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'flex-start', fontSize: '25px', marginRight: '203px', marginLeft: '180px'}}>
                        Design Tools
                    </p>
                    <div>
                        <p className="text-with-buttons">
                            <span>Illustrator</span>
                            <span>SketchUp</span>
                            <span>MAKAR</span>
                            <span>After Effects</span>
                            <span>InDesign</span>
                            <span>Photoshop</span>
                            <span>Procreate</span>
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'flex-start', fontSize: '25px', marginRight: '215px', marginLeft: '180px'}}>
                        Web Design
                    </p>
                    <div>
                        <p className="text-with-buttons">
                            <span>Adobe XD</span>
                            <span>Figma</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>JavaScript</span>
                            <span>React</span>
                            <span>GitHub</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: '40px', marginBottom: '50px'}}>
                <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '35px'}}>
                        <SouthIcon style={{marginRight: '8px'}}/>Experiences<SouthIcon style={{marginLeft: '8px'}}/>
                    </p>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'flex-start', fontSize: '25px', marginRight: '150px', marginLeft: '180px'}}>
                        Graphic Designer
                    </p>
                    <div>
                        <p lang="zh" className="chinese-text" >
                            新光三越-平面設計實習｜2022.09-2023.02<br />
                        <span style={{ color: '#666' }}>
                            大學時期於新光三越百貨實習半年，對於活動海報、文宣設計有豐富的實作經驗。
                        </span>
                        </p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    <p className="dm-serif-display-regular" style={{display: 'flex', justifyContent: 'flex-start', fontSize: '25px', marginRight: '130px', marginLeft: '180px'}}>
                        Visual Merchandiser
                    </p>
                    <div>
                        <p lang="zh" className="chinese-text" >
                            Hola和樂家居-陳列設計｜2023.08-2024.08<br />
                        <span style={{ color: '#666' }}>
                            除了店內的陳列規劃，這一年也參與了許多聖誕節、過年的佈置案，有許多來自工研院、科學園區和新竹社區的客戶。<br />
                            在空間佈置、3D規劃、客戶溝通和美感的能力上都有顯著的成長。
                        </span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}

export default About;