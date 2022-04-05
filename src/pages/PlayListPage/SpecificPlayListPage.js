import React from 'react';
import { useParams } from "react-router-dom";
import { useUserDetail } from "../../context/userDetail-context";
import { ListVideoCard }from "../../component/index"
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
                    return< ListVideoCard listDetail={foundplaylist} videoItem={item} key={item._id} listType="playlist"/>
                })
                :<h1 className='lightcolor'>your {playlistname} list is empty</h1>
            }
        </div>
    )
}
export default SpecificPlayListPage;