import React from 'react'
import { useFilter } from "../../context/filter-context";

function FilterBtn({categoryName}) {
    const {filterDispatch} = useFilter();
    return (
        <button className='filterBtn txt-lg boldest-font padding-sm' onClick={() => {
            filterDispatch({ type: "SET_CATEGORY" , payload: categoryName})
        }}>{categoryName}</button>
    )
}
export default FilterBtn;