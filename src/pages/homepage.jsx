import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer";
import { Navigate, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  function startClicked() {
    navigate("/test");
  }
  return (
    <div>
      <Header />
      <div className="mainpage">
        <div className="start" onClick={startClicked}>
          START
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
