import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/client/Homepage";
import Contact from "./pages/client/Contact";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
