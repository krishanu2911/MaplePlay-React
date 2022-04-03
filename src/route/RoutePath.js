import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home,PlayListPage,VideoListingPage , Liked, History, WatchLater , SpecificPlayListPage} from "../pages/index"
function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/playlist' element={<PlayListPage />}/>
            <Route path='/playlist/:listId' element={<SpecificPlayListPage />}/>
            <Route path='/videolist' element={<VideoListingPage />}/>
            <Route path='/liked' element={<Liked />}/>
            <Route path='/watchlater' element={<WatchLater />}/>
            <Route path='/history' element={<History />}/>
        </Routes>
    )
}
export default RoutePath;