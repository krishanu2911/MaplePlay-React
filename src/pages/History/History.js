import React from "react";
import "../../App.css";
import { useUserDetail } from "../../context/index";
import { ListVideoCard } from "../../component/index";
function History() {
  const { userDetailState, userDetailDispatch } = useUserDetail();
  const { historylist } = userDetailState;
  return (
    <div className="padding-m">
      <div className="maple-flex gap-m">
        <h1 className="txt-gray txt-xl">#Historylist</h1>
        <button
          className="filterBtn padding-sm txt-m boldest-font"
          onClick={() => userDetailDispatch({ type: "CLEAR_HISTORY" })}
        >
          Clear History
        </button>
      </div>

      {historylist.length ? (
        <section className="maple-flex gap-m maple-wrap">
          {historylist.map((item) => {
            return (
              <ListVideoCard
                listDetail={historylist}
                videoItem={item}
                key={item._id}
                listType="history"
              />
            );
          })}
        </section>
      ) : (
        <h1 className="lightcolor txt-center">
          You have not watchlaterlist any Video
        </h1>
      )}
    </div>
  );
}
export default History;
