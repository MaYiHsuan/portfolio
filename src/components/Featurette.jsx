import React from "react";
import { Carousel } from 'react-bootstrap';
import "../../public/styles.css";

const Featurette = ({ heading, heading2, text, text2, text3, text4, text5, image1, image2, videoUrl, imageUrls, reverse }) => {
    const getOrientationClass = (url) => {
        switch (url) {
            case '/video/多媒體設計錄影.mp4':
                return 'portrait';
            case '/video/寵物領養平台網站 錄影.mp4':
            case '/video/尋找桃花廣告定案h264.mp4':
                return 'landscape';
            default:
                return 'landscape'; // 默認橫向
        }
    };
    return(

    <div className={`row featurette ${reverse ? 'flex-row-reverse' : ''}`}>
        <div lang="zh" className="chinese-text col-md-7 ">
            <h3 className="featurette-heading">{heading} </h3>
            <h5 className="featurette-heading">{heading2}</h5>
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <div className="col-md-5 text3">
                <p>{text4}<br />{text5}</p>
                <div>
                    <img src={image1} width="80" className="me-2"/><img src={image2} width="100"/>
                </div>
            </div>
        </div>
        <div className="col-md-5">
            <Carousel className="carousel-continuous" interval={null} controls={true} indicators={true}>
                {videoUrl && (
                    <Carousel.Item>
                        <div className={`video-container ${getOrientationClass(videoUrl)}`}>
                            <video
                                className="d-block w-100"
                                controls
                                src={videoUrl}
                            />
                        </div>
                    </Carousel.Item>
                )}
                {imageUrls.map((url, index) => (
                    <Carousel.Item key={index}>
                        <div className="fixed-height-carousel-item">
                            <img
                                src={url}
                                className="d-block w-100"
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
        
    </div>
);
};

export default Featurette;
