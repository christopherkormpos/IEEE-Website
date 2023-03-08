import { BrowserRouter, Routes, Route } from "react-router-dom"; //React-Router
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contests from "./pages/Contests";
import Council from "./pages/Council";
import JoinIEEE from "./pages/JoinIEEE";
import News from "./pages/News";
import Projects from "./pages/Projects";
import NewsSb from "./pages/News_sb";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true); //State for Light Mode/ Dark Mode (Dark Mode initialised)

  function toggleDarkMode() {
    if (darkMode) {
      document.body.style.backgroundColor = "#ECEBF3";
      document.body.style.color = "#000000";
    } else {
      document.body.style.backgroundColor = "#1A1B41";
      document.body.style.color = "#F5F5F5";
    }
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route exact path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contests" element={<Contests />} />
          <Route path="/council" element={<Council />} />
          <Route path="/joinieee" element={<JoinIEEE />} />
          <Route path="/news" element={<News darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode}/>} />
          <Route path="/news_sb" element={<NewsSb darkMode={darkMode}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
