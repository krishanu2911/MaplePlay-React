import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css"
function PlayListCard({listDetail}) {
    const{playlistname , videoList , playlistId} = listDetail;
    console.log(listDetail);
    return (
        <div>
           <Link to={`/playlist/${playlistId}`}>
           {
               videoList.length ? <img src={`${videoList.slice(-1).map((item) => item.thumbnail)[0]}`}/> : <h1>your playlist is empty</h1>
           } 
           <h1 className='lightcolor'>{playlistname}</h1>
           </Link>
            
            
            
        </div>
    )
}
export default PlayListCard;