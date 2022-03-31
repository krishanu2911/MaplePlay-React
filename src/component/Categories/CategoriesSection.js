import React from 'react'
import {useAxios} from "../../utils/useAxios";
function CategoriesSection() {
    const  { apiResponse , loading }  = useAxios("/api/categories");
    const { categories } = apiResponse;
    console.log(categories);
    return (
        <div className='category-div'>
            <h1 className='lightcolor'>Categories</h1>
            <div className='category-section'>
              {
                loading ? <h1>loading</h1> :
                categories.map((item) => {
                    return (
                        <div className='categories-item'>
                           <h1 className='lightcolor'>{item.categoryName}</h1>
                           <p className='paraColor'>{item.description}</p>
                        </div>
                    ) 
                })
            }  
            </div>
        </div>
    )
}
export default CategoriesSection