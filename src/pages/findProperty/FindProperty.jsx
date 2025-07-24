import React from "react";
import { useParams } from "react-router-dom";
import shows from "../../showapi.js";
import Searcher from "../../components/searcher/Searcher.jsx";

const FindProperty = () => {
  const { location, propertytype } = useParams();
  const searchedProperties = shows.filter(
    (show) =>
      show.location.includes(location.slice(1)) &&
      show.propertyType.includes(propertytype.slice(1))
  );
  const youMayLikeProperties = shows
    .filter(
      (show) =>
        show.location.includes(location.slice(1)) ||
        show.propertyType.includes(propertytype.slice(1))
    )
    .map((prop) => {
      if (
        (prop.location.includes(location.slice(1)) &&
          !prop.propertyType.includes(propertytype.slice(1))) ||
        (!prop.location.includes(location.slice(1)) &&
          prop.propertyType.includes(propertytype.slice(1)))
      ) {
        return prop;
      }
    })
    .filter((prop) => prop !== undefined);

  return (
    <div className="mt-5 pt-5">
      <h2 className=" fw-semibold pt-sm-5 pt-0 text-success">
        Find Your BetaProperties Here.
      </h2>
      <h6 className=" bg-body-secondary fw-light text-success text-start ps-5 py-1 mt-2">
        {" "}
        Your Search...
      </h6>
      <div
        className="categories mb-5 d-sm-grid mt-sm-4 h-100"
        style={{
          gridTemplateColumns: `${
            searchedProperties.length === 1 ? "1fr" : "1fr 1fr 1fr"
          }`,
        }}
      >
        {searchedProperties.length >= 1 ? (
          <Searcher searchArr={searchedProperties} />
        ) : (
          <>
            <h4
              className="mt-4 text-nowrap"
              style={{
                marginInlineStart: `${
                  window.innerWidth > 390 ? "400px" : "0px"
                }`,
              }}
            >
              😞😭 No search found.
            </h4>
          </>
        )}
      </div>
      <h6 className=" bg-body-secondary fw-bolder text-success text-start ps-5 py-1 mt-4">
        {" "}
        You may also like
      </h6>
      <div
        className="categories mb-5 d-sm-grid mt-sm-4 h-100"
        style={{
          gridTemplateColumns: `${
            searchedProperties.length === 1 ? "1fr" : "1fr 1fr 1fr"
          }`,
        }}
      >
        {<Searcher searchArr={youMayLikeProperties} />}
      </div>
    </div>
  );
};

export default FindProperty;
