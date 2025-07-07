import React from "react";
import "./Properties.css";
import Showcase from "../../components/showcase/Showcase";

const Properties = () => {
  return (
    <div className="properties">
      <div className="w-100 mb-3" style={{ background: "#3d9970" }}></div>
      <h2 className=" fw-bold">Our Properties</h2>
      <div className="d-flex flex-column gap-5">
        <Showcase currentPage={"Properties"} />
      </div>
    </div>
  );
};

export default Properties;
