import { createContext, useContext, useReducer } from "react";
import { filterReducerFunction } from "../reducer/filterReducer";
const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducerFunction, {
    filterSelect: "All",
  });
  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterContextProvider, useFilter };
