import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home,PlayListPage,VideoListingPage , Liked, History, WatchLater} from "../pages/index"

function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/playlist' element={<PlayListPage />}/>
            <Route path='/videolist' element={<VideoListingPage />}/>
            <Route path='/liked' element={<Liked />}/>
            <Route path='/watchlater' element={<WatchLater />}/>
            <Route path='/history' element={<History />}/>
        </Routes>
    )
}
export default RoutePath;