import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import Test from "./pages/test.jsx";
import Info from "./pages/info.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
