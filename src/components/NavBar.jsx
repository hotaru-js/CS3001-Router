import { Link } from "react-router-dom";
import "../App.css";

function NavigationBar() {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/thermostat">Thermostat</Link>
      <Link to="/timer">Timer</Link>
    </div>
  );
}

export default NavigationBar;
