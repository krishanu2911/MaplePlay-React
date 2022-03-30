import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home,PlayListPage,VideoListingPage} from "../pages/index"

function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/playlist' element={<PlayListPage />}/>
            <Route path='/videolist' element={<VideoListingPage />}/>
        </Routes>
    )
}
export default RoutePath;