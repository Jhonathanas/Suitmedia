import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Menu from "./Pages/Ideas";
import About from "./Pages/About";
import Carrers from "./Pages/Carrers";
import Contact from "./Pages/Contact";
import Wokr from "./Pages/Wokr";
import Sevice from "./Pages/Sevice";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ideas" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/carrers" element={<Carrers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Sevice/>} />
        <Route path="/work" element={<Wokr/>} />
      </Routes>
      
    </>
  );
}

export default App;
