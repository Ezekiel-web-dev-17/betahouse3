import React from "react";
import shows from "../../../showapi.js";
import Searcher from "../../../components/searcher/Searcher.jsx";

const RealHouse = () => {
  const realLuxuryProperties = shows.filter(
    (realLuxuryProperty) =>
      realLuxuryProperty.title === "Real House Luxury Villa"
  );
  return (
    <div className="mt-5 pt-5">
      <h2 className=" fw-bold pt-sm-5 pt-0 text-success">
        Real House Luxury Villa Properties
      </h2>
      <div className="categories mb-5 d-sm-grid">
        {<Searcher searchArr={realLuxuryProperties} />}
      </div>
    </div>
  );
};

export default RealHouse;
