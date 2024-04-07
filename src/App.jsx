import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage";
import Test from "./pages/test.jsx";
import Info from "./pages/info.jsx";
import FinalPage from "./pages/Finalpage.jsx"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/info" element={<Info />} />
        <Route path="/finalpage" element={<FinalPage />} />
      </Routes>
    </div>
  );
}

export default App;
