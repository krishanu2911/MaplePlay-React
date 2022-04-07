import React from "react";
import { useFilter } from "../../context/filter-context";

function FilterBtn({ categoryName }) {
  const { filterDispatch, filterState } = useFilter();
  const { filterSelect } = filterState;
  return (
    <button
      className={`${filterSelect === categoryName ? "filterBtn" : "unactiveBtn"} txt-lg boldest-font padding-sm`}
      onClick={() => {
          console.log(filterState )
        filterDispatch({ type: "SET_CATEGORY", payload: categoryName });
      }}
    >
      {categoryName}
    </button>
  );
}
export default FilterBtn;
