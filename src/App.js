import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./style.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
