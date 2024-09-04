import React from 'react';
import Masonry from 'react-masonry-css';

function VisualMerchandising() {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
    576: 1
  };

//   const images = Array.from({ length: 39 }, (_, i) => ({
//     id: i + 1,
//     src: `https://picsum.photos/400/${300 + i * 10}?random=${i + 1}`,
//     alt: `Image ${i + 1}`
//   }));

    const images = [
        { id: 1, src: '/images/VD/店內/IMG_3812.jpg', alt: '店內陳列' },
        { id: 2, src: '/images/VD/店內/IMG_0159.jpg', alt: '店內陳列' },
        { id: 3, src: '/images/VD/店內/IMG_8229.jpg', alt: '店內陳列' },
        { id: 4, src: '/images/VD/聖誕/IMG_5434.jpg', alt: '店內陳列' },
        { id: 5, src: '/images/VD/店內/IMG_2106.jpg', alt: '店內陳列' },
        { id: 6, src: '/images/VD/店內/IMG_1206.jpg', alt: '店內陳列' },
        { id: 7, src: '/images/VD/店內/IMG_1144.jpg', alt: '店內陳列' },
        { id: 8, src: '/images/VD/店內/IMG_1224.jpg', alt: '店內陳列' },
        { id: 9, src: '/images/VD/店內/IMG_6694.jpg', alt: '店內陳列' },
        { id: 10, src: '/images/VD/店內/IMG_6652.jpg', alt: '店內陳列' },
        { id: 11, src: '/images/VD/店內/IMG_6684.jpg', alt: '店內陳列' },
        { id: 12, src: '/images/VD/店內/IMG_0936.jpg', alt: '店內陳列' },
        

        { id: 13, src: '/images/VD/聖誕/IMG_4941.jpg', alt: '聖誕佈置' },
        { id: 14, src: '/images/VD/聖誕/IMG_5085.jpg', alt: '聖誕佈置' },
        { id: 15, src: '/images/VD/聖誕/IMG_5408.jpg', alt: '聖誕佈置' },
        { id: 16, src: '/images/VD/聖誕/IMG_5601.jpg', alt: '聖誕佈置' },
        { id: 17, src: '/images/VD/聖誕/IMG_6035.jpg', alt: '聖誕佈置' },
        { id: 18, src: '/images/VD/聖誕/IMG_6113.jpg', alt: '聖誕佈置' },
        { id: 19, src: '/images/VD/聖誕/IMG_6215.jpg', alt: '聖誕佈置' },
        { id: 20, src: '/images/VD/聖誕/IMG_6214.jpg', alt: '聖誕佈置' },
        { id: 21, src: '/images/VD/聖誕/IMG_6006.jpg', alt: '聖誕佈置' },
        { id: 22, src: '/images/VD/聖誕/IMG_6048.jpg', alt: '聖誕佈置' },
        { id: 23, src: '/images/VD/聖誕/IMG_5742.jpg', alt: '聖誕佈置' },
        { id: 24, src: '/images/VD/聖誕/IMG_5967.jpg', alt: '聖誕佈置' },
        { id: 25, src: '/images/VD/聖誕/IMG_5962.jpg', alt: '聖誕佈置' },
        { id: 26, src: '/images/VD/聖誕/IMG_5966.jpg', alt: '聖誕佈置' },

        { id: 27, src: '/images/VD/過年/IMG_7257.jpg', alt: '過年佈置' },
        { id: 28, src: '/images/VD/過年/IMG_7631.jpg', alt: '過年佈置' },
        { id: 29, src: '/images/VD/過年/IMG_7654 2.jpg', alt: '過年佈置' },
        { id: 30, src: '/images/VD/過年/IMG_7942.jpg', alt: '過年佈置' },
        { id: 31, src: '/images/VD/過年/IMG_7948.jpg', alt: '過年佈置' },
        { id: 32, src: '/images/VD/過年/IMG_7650.jpg', alt: '過年佈置' },
        { id: 33, src: '/images/VD/過年/IMG_7632.jpg', alt: '過年佈置' },

        { id: 34, src: '/images/VD/插花/IMG_7226.jpg', alt: '插花' },
        { id: 35, src: '/images/VD/插花/IMG_7232.jpg', alt: '插花' },
        { id: 36, src: '/images/VD/插花/IMG_6986.jpg', alt: '插花' },
        { id: 37, src: '/images/VD/插花/IMG_8951.jpg', alt: '插花' },

        { id: 38, src: '/images/VD/截圖正面.png', alt: 'stechUp' },
        { id: 39, src: '/images/VD/截圖俯視圖.png', alt: 'stechUp' },
        { id: 40, src: '/images/VD/IMG_3423.jpg', alt: 'stechUp' },
        { id: 41, src: '/images/VD/IMG_3424.jpg', alt: 'stechUp' },
        { id: 42, src: '/images/VD/IMG_3425.jpg', alt: 'stechUp' },
        { id: 43, src: '/images/VD/IMG_1786.jpg', alt: 'dm設計' },
        { id: 44, src: '/images/VD/IMG_7184.jpg', alt: 'dm設計' },
    ];
    

  return (
    <div className="container" style={{marginTop: '90px'}}>
      <div className="row align-items-center mb-4" style={{ height: '150px' }}>
        <div className="col-md-8">
          <h1 className="display-4 mb-2">Visual Merchandising</h1>
          <h2 lang="zh" className="chinese-text h4 mb-2">陳列設計(2023-2024)</h2>
          <p lang="zh" className="chinese-text text-muted">於Hola和樂家居當任陳列設計師一年<br />店內陳列/聖誕佈置/新年佈置/快閃店/陳列設計/sketchUp/平面設計/燈光/攝影</p>
          
        </div>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="row"
        columnClassName="col-sm-6 col-lg-3 mb-4"
      >
        {images.map((image) => (
          <div key={image.id} style={{breakInside: 'avoid', marginBottom: '0.5rem'}}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="img-fluid rounded shadow-sm" 
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default VisualMerchandising;
