import React from 'react'
import { useUserDetail } from "../../context/userDetail-context";
import { useNavigate } from 'react-router-dom';
import PlayListCard from "./PlayListCard";
function PlayListPage() {
    const videoListNavigate = useNavigate()
    const {userDetailState} = useUserDetail();
    const {playlist} = userDetailState;
    return (
        <div className='padding-m'>
            <h1 className='lightcolor '>Playlists</h1>
            <div className='maple-flex-xy-center'>
            
            {
               playlist.length ? playlist.map((item) => {
                   return<PlayListCard listDetail={item} key={item.playlistId}/>
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
        </div>
        
    )
}
export default PlayListPage;