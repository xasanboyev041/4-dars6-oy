import "./App.css";
import Home from "./routes/Home";
import Contact from "./routes/Contant.jsx";
import Nav from "./components/Nav.jsx";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
