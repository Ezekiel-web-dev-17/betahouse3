import React, { useState } from "react";
import "./Homepage.css";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsFillGeoAltFill,
} from "react-icons/bs";
import line from "../../utils/Line 7.svg";
import Showcase from "../../components/showcase/Showcase.jsx";
import Header from "../../components/header/Header.jsx";
import shows from "../../showapi.js";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const cards = [
    shows[14],
    shows[13],
    shows[12],
    shows[11],
    shows[10],
    shows[9],
  ];

  const cardWidth = 300; //Includes image width + gap
  const visibleCards = 4;
  const maxIndex = cards.length - visibleCards;

  const handleLeft = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRight = () => {
    setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="home overflow-x-hidden">
      <Header />
      <main>
        <section>
          <Showcase currentPage={"Home"} />
        </section>
        <section className="discover-sect mb-5 pb-5">
          <h2 className="mt-3 pt-3  pb-3 mb-5" style={{ color: "#3d9970" }}>
            Discover Our Popular Properties
          </h2>

          <div className="caro-discover position-relative">
            <BsArrowLeftCircle
              className="fs-1 rounded-circle"
              style={{
                cursor: "pointer",
                position: "absolute",
                left: "75px",
                top: "50%",
                color: "white",
                backgroundColor: "#3d9970",
                zIndex: 3,
                boxShadow: "0px 0px 25px black",
              }}
              onClick={handleLeft}
            />

            <div
              className="carousel-window overflow-hidden"
              style={{ width: "92%", margin: "0 auto" }}
            >
              <div
                className="d-flex gap-sm-3 gap-2"
                style={{
                  transform: `translateX(-${scrollIndex * cardWidth}px)`,
                  transition: "transform 0.7s ease-in-out",
                  width: "max-content",
                }}
              >
                {cards.map((card, i) => (
                  <Link to={`/house/:${card?.id}`}>
                    <div
                      key={i}
                      className={`position-relative ${
                        i <= 2 ? "small-screen" : ""
                      }`}
                    >
                      <img
                        src={card?.image}
                        width="290px"
                        height="412px"
                        className="rounded-3"
                        alt=""
                      />
                      {card?.title && (
                        <div
                          className="more-details d-flex flex-column align-items-start position-absolute bg-black bg-opacity-25 gap-2 p-3 w-100 rounded-bottom-3"
                          style={{
                            bottom: "0px",
                            color: "white",
                            left: "0px",
                            fontFamily: "Outfit",
                          }}
                        >
                          <h6>{card.title}</h6>
                          <h6 className="mb-0">₦{card?.price}</h6>
                          <div className=" d-flex flex-row align-items-center gap-2">
                            <p className="mb-0" style={{ fontSize: "13px" }}>
                              {card?.bed} Bed
                            </p>
                            <img src={line} width="5px" height="14px" alt="" />
                            <p className="mb-0" style={{ fontSize: "13px" }}>
                              {card?.bath} Bath
                            </p>
                            <img src={line} width="5px" height="14px" alt="" />
                            <p className="mb-0" style={{ fontSize: "13px" }}>
                              720sqft
                            </p>
                          </div>
                          <div className="img-location d-flex gap-2 align-items-center">
                            <BsFillGeoAltFill />
                            <p className=" mb-0" style={{ fontSize: "13px" }}>
                              Victoria Island, Lagos
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <BsArrowRightCircle
              className="fs-1 rounded-circle"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "75px",
                top: "50%",
                color: "white",
                backgroundColor: "#3d9970",
                boxShadow: "0px 0px 25px black",
              }}
              onClick={handleRight}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
