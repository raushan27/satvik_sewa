import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import Test from "./pages/test.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
