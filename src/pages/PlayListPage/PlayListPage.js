import React from 'react'
import { useUserDetail } from "../../context/userDetail-context";
import { useNavigate } from 'react-router-dom';
import PlayListCard from "./PlayListCard";
function PlayListPage() {
    const videoListNavigate = useNavigate()
    const {userDetailState, userDetailDispatch} = useUserDetail();
    const {playlist} = userDetailState;
    return (
        <div className='maple-flex-xy-center'>
            {
               playlist.length ? playlist.map((item) => {
                   return<PlayListCard listDetail={item} key={item.playlistId}/>
                //    return<h1 className='lightcolor'>{item.playlistname}</h1>
               })
               :
               <button 
               onClick={() => {
                videoListNavigate("/videolist")
               }}
               className='filterBtn padding-m txt-xl boldest-font'
               
               >Create Playlist</button>
            }
        </div>
    )
}
export default PlayListPage;