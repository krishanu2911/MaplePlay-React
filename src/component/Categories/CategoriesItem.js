import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

function CategoriesItem({ item }) {
  const exploreNavigate = useNavigate();
  const { filterDispatch } = useFilter();
  return (
    <div
      className="categories-item"
      onClick={() => {
        filterDispatch({ type: "SET_CATEGORY", payload: item.categoryName });
        exploreNavigate("/videolist");
      }}
    >
      <h1 className="lightcolor">{item.categoryName}</h1>
      <p className="paraColor">{item.description}</p>
    </div>
  );
}
export default CategoriesItem;
