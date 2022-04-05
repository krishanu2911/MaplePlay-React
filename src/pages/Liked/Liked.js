import React from "react";
import "../../App.css";
import { useUserDetail } from "../../context/index";
import { ListVideoCard } from "../../component/index";
function Liked() {
  const { userDetailState } = useUserDetail();
  const { likedlist } = userDetailState;
  return (
    <div className="padding-m">
        <h1 className="txt-gray txt-xl">#LikedVideoList</h1>
      {likedlist.length ? (
        <section className="maple-flex gap-m maple-wrap">
          {likedlist.map((item) => {
            return (
              <ListVideoCard
                listDetail={likedlist}
                videoItem={item}
                key={item._id}
                listType="like"
              />
            );
          })}
        </section>
      ) : (
        <h1 className="lightcolor txt-center">You have not liked any Video</h1>
      )}
    </div>
  );
}
export default Liked;
