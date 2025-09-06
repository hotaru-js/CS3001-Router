import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing components
import NavigationBar from "./components/NavBar";

// Importing pages
import Home from "./pages/Home";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Thermostat from "./pages/Thermostat";
import Timer from "./pages/Timer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/education" Component={Education}></Route>
          <Route path="/skills" Component={Skills}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/experience" Component={Experience}></Route>
          <Route path="/achievements" Component={Achievements}></Route>
          <Route path="/thermostat" Component={Thermostat}></Route>
          <Route path="/timer" Component={Timer}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
