import React from "react";
import "../../App.css";
import { useUserDetail } from "../../context/index";
import { ListVideoCard } from "../../component/index";
function WatchLater() {
  const { userDetailState } = useUserDetail();
  const { watchlaterlist } = userDetailState;
  return (
    <div className="padding-m">
        <h1 className="txt-gray txt-xl">#watchlaterlist</h1>
      {watchlaterlist.length ? (
        <section className="maple-flex gap-m maple-wrap">
          {watchlaterlist.map((item) => {
            return (
              <ListVideoCard
                listDetail={watchlaterlist}
                videoItem={item}
                key={item._id}
                listType="watchlater"
              />
            );
          })}
        </section>
      ) : (
        <h1 className="lightcolor txt-center">You have not added any video to watchlaterlist</h1>
      )}
    </div>
  );
}
export default WatchLater;