import "./App.css";
import RoutePath from "./route/RoutePath";
import { Navbar , Footer } from "./component/index";
function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutePath />
      <Footer />
    </div>
  );
}

export default App;
