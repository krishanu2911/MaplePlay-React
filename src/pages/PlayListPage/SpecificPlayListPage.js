import React from 'react';
import { useParams } from "react-router-dom";
import { useUserDetail } from "../../context/userDetail-context";
import PlayListVideoCard from './PlayListVideoCard';
import PlayListCard from './PlayListCard';
import  VideoCard from "../../component/videoSection/VideoCard"
function SpecificPlayListPage() {
    const {listId} = useParams();
    const { userDetailState } = useUserDetail();
    const { playlist } = userDetailState;
    const foundplaylist = playlist.find((item) => item.playlistId === listId);
    const {videoList,playlistname} = foundplaylist;
    return (
        <div className='padding-m'>
            <h1 className='lightcolor'>Playlist: {playlistname}</h1>
            {
              videoList.length ? videoList.map((item) => {
                    return< PlayListVideoCard listDetail={foundplaylist} videoItem={item} key={item._id}/>
                })
                :<h1 className='lightcolor'>your {playlistname} list is empty</h1>
            }
        </div>
    )
}
export default SpecificPlayListPage;