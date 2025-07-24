import React from "react";
import shows from "../../../showapi.js";
import Searcher from "../../../components/searcher/Searcher.jsx";

const ExquisiteHaven = () => {
  const exquisiteHavenProperties = shows.filter(
    (exquisiteHavenProperty) =>
      exquisiteHavenProperty.title === "Exquisite Haven Villa"
  );
  return (
    <div className="mt-5 pt-5">
      <h2 className=" fw-bold pt-sm-5 pt-0 text-success">
        Exquisite Haven Villa Properties
      </h2>
      <div className="categories mb-5 d-sm-grid">
        {<Searcher searchArr={exquisiteHavenProperties} />}
      </div>
    </div>
  );
};

export default ExquisiteHaven;
