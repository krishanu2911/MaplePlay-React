import React from 'react'
import {useAxios} from "../../utils/useAxios";
import CategoriesItem from './CategoriesItem';
function CategoriesSection() {
    const  { apiResponse , loading }  = useAxios("/api/categories");
    const { categories } = apiResponse;
    return (
        <div className='category-div'>
            <h1 className='lightcolor'>Categories</h1>
            <div className='category-section'>
              {
                loading ? <h1>loading</h1> :
                categories.map((item) => {
                    return (
                        <CategoriesItem item={item} />
                    ) 
                })
            }  
            </div>
        </div>
    )
}
export default CategoriesSection