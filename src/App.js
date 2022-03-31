import "./App.css";
import RoutePath from "./route/RoutePath";
import { Navbar, Topbar } from "./component/index";
import { useAxios } from "./utils/useAxios";
function App() {
  const {apiResponse , loading} = useAxios("/api/categories");
  // if(!loading){
  //   console.log(apiResponse.categories)
  // }
  return (
    <div className="App">
        <Navbar />
        <div className="main-area maple-flex">
          <Topbar/>
         <RoutePath /> 
        </div>
        
    </div>
  );
}

export default App;
