import React from "react";
import shows from "../../../showapi.js";
import Searcher from "../../../components/searcher/Searcher.jsx";

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
      <div className="categories mb-5 d-sm-grid">
        {<Searcher searchArr={luxePalatialProperties} />}
      </div>
    </div>
  );
};

export default LuxePalatial;
