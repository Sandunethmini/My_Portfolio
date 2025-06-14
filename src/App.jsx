import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skillssection from "./components/Skillssection";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-700 to-pink-400">
        <Navbar />
        
        <Home />
        <About />
        <Projects />
        <Skillssection />

        <Contact />
          
        <Footer />
      </div>
    </Router>
  );
}

export default App;