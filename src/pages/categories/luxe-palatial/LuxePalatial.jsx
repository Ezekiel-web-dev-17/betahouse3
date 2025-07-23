import React from "react";
import shows from "../../../showapi.js";
import { Link } from "react-router-dom";
import imglink1 from "../../../../src/utils/Vector (9).svg";
import imglink2 from "../../../../src/utils/Vector (8).svg";
import imglink3 from "../../../../src/utils/Vector (7).svg";
import bed from "../../../../src/utils/Icon.svg";
import bathroom from "../../../../src/utils/Vector (6).svg";
import arrowToFro from "../../../../src/utils/Vector (4).svg";
import { BsFillGeoAltFill, BsHeart, BsShare } from "react-icons/bs";

const LuxePalatial = () => {
  const luxePalatialProperties = shows.filter(
    (luxePalatialProperty) =>
      luxePalatialProperty.title === "Luxe Palatial Villa"
  );
  return (
    <div className="mt-5 pt-5">
      <h2 className=" fw-bold pt-sm-5 pt-0 text-success">
        Luxe Palatial Villa Properties
      </h2>
      <div
        className="mb-5 d-sm-grid"
        style={{
          width: "80%",
          placeContent: "center",
          marginInlineStart: "10%",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: `${window.innerWidth > 390 ? "2%" : ""}`,
        }}
      >
        {luxePalatialProperties.map((luxePalatialProperty, i) => (
          <div
            key={i}
            className="mx-0 ms-sm-0 d-block mt-4"
            style={{ width: "99%" }}
          >
            <Link
              to={`/house/:${luxePalatialProperty.id}`}
              className="less text-decoration-none"
            >
              <div className="more position-relative">
                <img
                  src={luxePalatialProperty.image}
                  className="rounded-top-4 photo photo2"
                  alt=""
                />
                <div>
                  <span className=" featured rounded-2 text-white position-absolute w-100">
                    Featured
                  </span>
                  <span className="for rounded-2 text-white position-absolute w-100">
                    For {luxePalatialProperty.whatFor}
                  </span>
                </div>
                <div className="position-absolute link-rec-img">
                  <img
                    src={imglink1}
                    className="fs-2"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <img
                    src={imglink2}
                    className="fs-2"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                  <img
                    src={imglink3}
                    className="fs-2"
                    width="30px"
                    height="30px"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="about-card p-3 border-1 rounded-bottom-4 d-flex align-items-start flex-column"
                style={{ minWidth: "101%" }}
              >
                <h4 className=" mb-0">{luxePalatialProperty.title}</h4>
                <p
                  className="mb-sm-3 mb-1"
                  style={{ color: "#666666", font: "Outfit" }}
                >
                  {<BsFillGeoAltFill />} {luxePalatialProperty.location}
                </p>
                <div
                  className="d-flex justify-content-between w-100 pe-sm-5 pe-0"
                  style={{ color: "#666666", font: "Outfit" }}
                >
                  <span className="d-flex justify-content-between gap-2 me-sm-0 me-4">
                    <img src={bed} alt="" />
                    <p className="mb-0 abt">
                      {luxePalatialProperty.bed} Bedrooms
                    </p>
                  </span>
                  <span className="d-flex justify-content-between gap-2 me-5">
                    <img src={bathroom} alt="" />
                    <p className="mb-0 abt">
                      {luxePalatialProperty.bath} Bathrooms
                    </p>
                  </span>
                </div>

                <div className=" w-100 d-flex justify-content-between align-items-center border-top border-dark-subtle border-1 mt-3 pt-4">
                  <h4 className="mb-0">
                    ₦ {luxePalatialProperty.price}
                    {luxePalatialProperty.whatFor === "Rent" ? "/yr" : ""}
                  </h4>
                  <img src={arrowToFro} alt="" />
                  <BsShare />
                  <BsHeart />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuxePalatial;
