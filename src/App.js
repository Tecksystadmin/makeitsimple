import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./Components/index";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
