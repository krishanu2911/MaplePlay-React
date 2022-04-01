import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideoCategoryProvider } from "./context/videoCategoried";
import { FilterContextProvider  } from "./context/filter-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterContextProvider>
    <VideoCategoryProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>  
    </VideoCategoryProvider>  
    </FilterContextProvider>
    
    
  </React.StrictMode>,
  document.getElementById("root")
);
