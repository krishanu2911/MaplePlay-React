import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css"
function PlayListCard({listDetail}) {
    const{playlistname , videoList , playlistId} = listDetail;
    console.log(listDetail);
    return (
            <div className='playlist-card'>
           <Link to={`/playlist/${playlistId}`}>
            <h1 className='lightcolor txt-lg txt-center'>{playlistname}</h1>
           {
               videoList.length ? <img src={`${videoList.slice(-1).map((item) => item.thumbnail)[0]}`}/> : <h1 className='lightcolor txt-lg'>{playlistname} playlist is empty</h1>
           } 
           <div>
               
           </div>
           
           </Link>
        </div>
        
    )
}
export default PlayListCard;