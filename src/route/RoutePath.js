import React from 'react'
import { Route, Routes } from 'react-router-dom';
import {Home,PlayListPage,VideoListingPage , Liked, History, WatchLater , SpecificPlayListPage ,SingleVideoPage ,Login , Signup} from "../pages/index"
function RoutePath() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/playlist' element={<PlayListPage />}/>
            <Route path='/playlist/:listId' element={<SpecificPlayListPage />}/>
            <Route path='/videolist' element={<VideoListingPage />}/>
            <Route path='/singlevideo/:videoId' element={<SingleVideoPage />}/>
            <Route path='/liked' element={<Liked />}/>
            <Route path='/watchlater' element={<WatchLater />}/>
            <Route path='/history' element={<History />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
        </Routes>
    )
}
export default RoutePath;