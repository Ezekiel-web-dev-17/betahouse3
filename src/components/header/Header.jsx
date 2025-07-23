import minus from "../../utils/span.bedroom-count-btn.svg";
import plus from "../../utils/span.bedroom-count-btn (1).svg";
import line from "../../utils/Line 7.svg";
import { useEffect, useState } from "react";
import shows from "../../showapi.js";
import "./Header.css";

const Header = () => {
  const [noOfBedrooms, setNoOfBedrooms] = useState(1);
  const [locateContent, setLocateContent] = useState({
    locationName: "",
    propertyType: "",
  });
  const [searching, setSearching] = useState(false);

  function onInputChange(e) {
    e.preventDefault();
    setLocateContent({ ...locateContent, [e.target.name]: e.target.value });
    setSearching(true);
  }

  const searchedProperty = shows.filter(
    (property) =>
      property.location.includes(locateContent.locationName) &&
      property.propertyType.includes(locateContent.propertyType) &&
      property.bed === noOfBedrooms
  );

  useEffect(() => {
    console.log(searchedProperty);
    setSearching(true);
    const ul = document.querySelector(".property-list");

    searchedProperty.forEach((property) => {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.style.color = "#3d9970";
      li.style.listStyle = "none";
      a.style.borderBlockEnd = "1px solid #9f9f9f";
      a.style.textDecoration = "none";
      if (searchedProperty.length >= 1) {
        a.textContent = `${property?.title}`;
        a.href = `/house/:${property?.id}`;
        li.appendChild(a);
        ul.append(li);
        console.log(ul);
      }
    });
  }, [locateContent, noOfBedrooms]);

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
        <button className="border-0 find-prop text-white">Find Property</button>
        {searching &&
          (locateContent.locationName ||
            locateContent.propertyType ||
            noOfBedrooms > 1) && (
            <div
              className="search bg-white bg-opacity-100 w-100 start-0 position-absolute shadow py-2 rounded-3 overflow-y-scroll border-1 border-success"
              style={{
                marginTop: `${window.innerWidth <= 390 ? "330px" : "200px"}`,
                maxHeight: "100px",
              }}
            >
              <ul className="property-list text-success fw-bold text-start px-1 px-sm-3"></ul>
            </div>
          )}
      </section>
    </header>
  );
};

export default Header;
