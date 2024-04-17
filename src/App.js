import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/client/Homepage";
import Contact from "./pages/client/Contact";
import Board from "./pages/client/About/Board";
import AboutsUs from "./pages/client/About/AboutsUs";
import Program from "./pages/client/Programs/Program";
import JoinUs from "./pages/client/JoinUs/JoinUs";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<AboutsUs />} />
        <Route exact path="/about/board" element={<Board />} />
        <Route exact path="/programs" element={<Program />} />
        <Route exact path="//programme/goodCitizen" element={<AboutsUs />} />
        <Route exact path="/joinUs" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
