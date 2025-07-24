import React from "react";
import shows from "../../../showapi.js";
import Searcher from "../../../components/searcher/Searcher.jsx";

const InfiniteBliss = () => {
  const infiniteBlissProperties = shows.filter(
    (infiniteBlissProperty) =>
      infiniteBlissProperty.title === "Infinite Bliss Villa"
  );
  return (
    <div className="mt-5 pt-5">
      <h2 className=" fw-bold pt-sm-5 pt-0 text-success">
        Infinite Bliss Villa Properties
      </h2>
      <div className="categories mb-5 d-sm-grid">
        {<Searcher searchArr={infiniteBlissProperties} />}
      </div>
    </div>
  );
};

export default InfiniteBliss;
