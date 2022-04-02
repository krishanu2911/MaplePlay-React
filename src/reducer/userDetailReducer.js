import { v4 as uuid } from "uuid";
const userDetailReducer = (state , action) => {
    switch(action.type){
        case "CREATE_PLAYLIST" :
            return{...state,playlist:[...state.playlist,{playlistname:action.payload,playlistId:uuid()}]}
    }
}
export {userDetailReducer};