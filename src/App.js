import "./App.css";
import NavBar from "./components/NavBar";
import Feed from "./components/Feed/Feed";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="home">
        <div className="home-left">
          <Feed />
        </div>
        <div className="home-right">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
