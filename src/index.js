import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoCategoryProvider, FilterContextProvider, UserDetailContextProvider } from "./context/index";
import PlaylistModal from "./component/PlaylistModal/PlaylistModal"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <UserDetailContextProvider>
      <FilterContextProvider>
        <VideoCategoryProvider>
          <BrowserRouter>
            <PlaylistModal />
            <App />
          </BrowserRouter>
        </VideoCategoryProvider>
      </FilterContextProvider>
    </UserDetailContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
