import React from "react";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../public/styles.css";

function Home() {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/projects");
  };

  return (
    <div className="d-flex h-100 text-center text-black bg-white">
      <main className=" w-100">
        <Carousel fade interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/DESPOTISM/book/DSC08816-2 2.jpg"
              alt="First slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/u/Behance-U-02.jpg"
              alt="Second slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ui/home/home-01.jpeg"
              alt="Third slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/ui/ootd/網頁ootd.jpg"
              alt="4 slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/CIS/識別形象海報.jpg"
              alt="5 slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/cindy/風景2.jpg"
              alt="6 slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/cindy/風景.jpg"
              alt="7 slide"
              style={{ height: "100vh", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>

        <div
          className="carousel-caption d-none d-md-block"
          style={{ zIndex: 1, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          <h1>Cindy's portfolio</h1>
          <p className="lead">
            <span lang="zh" className="chinese-text">
            設計是我連結世界的方式，從實體到數位，用不同的視角探索世界。
            </span> <br />
            Design is how I connect with the world—bridging the physical and digital, while exploring new perspectives.
          </p>
          <p className="lead">
            <a
              onClick={handleLearnMore}
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
              style={{
                color: "#333",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                textShadow: "none",
              }}
            >
              Learn more
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
