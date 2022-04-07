import React from 'react'
import "../../App.css"
import { useAxios } from '../../utils/useAxios';
import FilterBtn from './FilterBtn';
import { useFilter } from "../../context/filter-context";
function FilterSection() {
    const {filterDispatch , filterState} = useFilter();
    const { filterSelect } = filterState;
    const {apiResponse , loading} = useAxios("/api/categories");
    const {categories} = apiResponse;
    return (
        <div className='maple-flex gap-m padding-m maple-wrap'>
            <button className={`${filterSelect === "All" ? "filterBtn" : "unactiveBtn"} txt-lg boldest-font padding-sm`} onClick={() => filterDispatch({type:"RESET" ,payload:"All"})}>All</button>
            {
                loading ? <h1 className='lightcolor'>Loading...</h1> :
                categories.map((item) =>{
                    return <FilterBtn categoryName={item.categoryName} />
                })
            }
        </div>
    )
}
export default FilterSection;