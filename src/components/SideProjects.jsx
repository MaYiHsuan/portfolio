  import React from "react";
  import "bootstrap/dist/css/bootstrap.min.css";

  const projects = [
    { id: 1, title: "Paiwan", image: "/images/cindy/Paiwan.jpg", description: "第八屆全國學生台灣原住民海報創作競賽-佳作。相傳百步蛇是排灣族的祖先，百步蛇的性情如同族人頭目的形象-獨立、安定、和平，運用排灣族最具特色的手部紋面，搭配強而有力的姿勢，簡單明瞭的呈現出排灣族的力與美。" },
    { id: 2, title: "風景油畫", image: "/images/cindy/Paint/油畫樹.jpg", description: "" },
    { id: 3, title: "賣火材的小女孩-電腦繪圖", image: "/images/cindy/Paint/IMG_0470.jpg", description: "以聚光燈的方式聚焦在小女孩身上，加強了她的寂寞和無助感。" },
    { id: 4, title: "貓與蝴蝶-油畫", image: "/images/cindy/Paint/油畫貓.jpg", description: "貓與蝴蝶的相遇" },
    { id: 5, title: "戰鬥女孩", image: "/images/cindy/Paint/狐狸女孩.jpg", description: "人物創作，為了保衛族人，就算受再多的傷都要挺身而出。" },
    { id: 6, title: "人物繪畫-電腦繪圖", image: "/images/cindy/Paint/產賀正面.jpg", description: "" },
    { id: 7, title: "狐狸祈福卡-電腦繪圖", image: "/images/cindy/Paint/祈福卡.jpg", description: "祈福小卡，狐狸叼著鈴鐺為村民祈求平安。背景採用木板材質增加日系感。" },
    { id: 8, title: "名片設計", image: "/images/cindy/名片 Mockup.jpg", description: "正面為簡約插畫搭配玫瑰金燙金，增加名片質感，背面為基本資料搭配幾何圖形設計。" },
    { id: 9, title: "鹿燈", image: "/images/cindy/IMG_7737.jpg", description: "鹿就像是住在森林裡的守護神，鹿和木頭的搭配，讓畫作增加靈氣，串燈纏繞在鹿角上，像是許多小精靈圍繞在鹿的頭上，也為迷失方向的人照亮方向。" },
    { id: 10, title: "星星王子-壓克力", image: "/images/cindy/Paint/壓克力星星.jpg", description: "人物創作，一位背負著星球命運的王子，必須和心愛的地球女孩分開，手上還留著她的餘溫，但王子已經慢慢消失在那顆美麗的粉紫星球中。" },
    { id: 11, title: "奧斯卡小金人創作-電腦繪圖", image: "/images/cindy/08210835馬苡瑄 AI小金人.jpg", description: "以「不能說的秘密」電影所做的小金人，周圍散落的都是跟電影有關的重要物品" },
    { id: 12, title: "香水標設計", image: "/images/cindy/Perfume Bottle Mockup_.jpg", description: "靈感來自英國的著名設計師William Morris，莫里斯設計風格中最常見的植物圖騰元素，優雅且高貴，現今也常用在壁紙與織品設計中。" },
    { id: 13, title: "聖誕卡片-電腦繪圖", image: "/images/cindy/Paint/兔子.jpg", description: "以兔年為發想設計的聖誕卡片。" },
  ];

  function SideProjects() {
    return (
        <div className="container" style={{marginTop: '90px'}}>
            <div className="row align-items-center mb-4" style={{ height: '150px' }}>
                <div className="col-md-8">
                    <h1 className="display-4 mb-2">My Side Projects</h1>
                    <h2 lang="zh" className="chinese-text h4 mb-2">副項目</h2>
                    <p lang="zh" className="chinese-text text-muted">水彩 / 壓克力 / 油畫 / 電腦繪圖 / 其他</p>
                </div>
            </div>

            <div >
                <div style={{
                    columnCount: 4,
                    columnGap: '1rem',
                    '@media (max-width: 768px)': {
                    columnCount: 2,
                    },
                    '@media (max-width: 576px)': {
                    columnCount: 1,
                    }
                }}>
                    {projects.map((project) => (
                    <div  key={project.id} style={{breakInside: 'avoid', marginBottom: '1rem'}}>
                        <div lang="zh" className="chinese-text card shadow-sm">
                            <img src={project.image} className="card-img-top" alt={project.title} />
                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }

  export default SideProjects;