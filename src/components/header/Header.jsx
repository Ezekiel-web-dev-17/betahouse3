import minus from "../../utils/span.bedroom-count-btn.svg";
import plus from "../../utils/span.bedroom-count-btn (1).svg";
import line from "../../utils/Line 7.svg";
import { useState } from "react";
import shows from "../../showapi.js";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [noOfBedrooms, setNoOfBedrooms] = useState(1);
  const [locateContent, setLocateContent] = useState({
    locationName: "",
    propertyType: "",
  });
  const find = useNavigate();

  function onInputChange(e) {
    e.preventDefault();
    setLocateContent({ ...locateContent, [e.target.name]: e.target.value });
  }

  const searchedProperty =
    locateContent.locationName || locateContent.propertyType
      ? shows.find(
          (property) =>
            property.location.includes(locateContent.locationName) &&
            property.propertyType.includes(locateContent.propertyType)
        )
      : [];

  function findProperty() {
    find(
      `/search/:${searchedProperty?.location}/:${searchedProperty?.propertyType}`
    );
  }

  return (
    <header className=" d-flex flex-column align-items-center justify-content-center gap-5">
      <h1 className="display-5 fw-semibold text-white mb-0">
        Find Your Next Home With Ease.
      </h1>
      <p className="find-txt mb-0">
        <strong>Buy and Rent Properties.</strong> Connect with trusted agents
        and real homeowners across Nigeria — all in one place.
      </p>
      <section className="hero rounded-3 ps-sm-5 px-3 px-sm-0 m-3">
        <div>
          <h6>LOCATION</h6>
          <input
            type="text"
            name="locationName"
            value={locateContent.locationName}
            onChange={onInputChange}
            className="locate mb-0 border-0 px-3 bg-success-subtle rounded-2 text-center"
            placeholder="eg. Gbagada"
            style={{ width: "180px" }}
          />
        </div>
        <img src={line} alt="" />
        <div>
          <h6 className=" text-center">PROPERTY TYPE</h6>
          <input
            type="text"
            name="propertyType"
            onChange={onInputChange}
            value={locateContent.propertyType}
            className="property mb-0 border-0 px-3 bg-success-subtle rounded-2 text-center"
            placeholder="eg. Duplex, Bedroom Flat"
            style={{ width: `${window.innerWidth > 400 ? "300px" : "180px"}` }}
          />
        </div>
        <img src={line} alt="" />
        <div>
          <h6 className=" text-center">BEDROOM</h6>
          <div className="bedroom-ctrl align-items-center d-flex w-100 gap-4 flex-nowrap">
            <img
              src={minus}
              alt=""
              style={{
                cursor: `${noOfBedrooms > 1 ? "pointer" : "not-allowed"}`,
                transform: "rotate(0deg)",
              }}
              onClick={() => {
                if (noOfBedrooms > 1) {
                  setNoOfBedrooms(noOfBedrooms - 1);
                }
              }}
            />
            <p className=" mb-0">{noOfBedrooms}</p>
            <img
              src={plus}
              alt=""
              style={{
                cursor: `${noOfBedrooms < 8 ? "pointer" : "not-allowed"}`,
              }}
              onClick={() => {
                if (noOfBedrooms < 8) {
                  setNoOfBedrooms(noOfBedrooms + 1);
                }
              }}
            />
          </div>
        </div>
        <button
          className="border-0 find-prop text-white"
          onClick={findProperty}
        >
          Find Property
        </button>
      </section>
    </header>
  );
};

export default Header;
