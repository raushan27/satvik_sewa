import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer";
import { Navigate, useNavigate } from "react-router-dom";

function FinalPage() {
  const navigate = useNavigate();
  function startClicked() {
    navigate("/test");
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="mainpage">
        <div className="final-dialogue" style={{ fontSize: "150%" }}>
          Hey! Thank you! You have subscribed to web notification based planner. Our planner gives you proper 
          notification at the relevant time. You have been very courageous to come so far. And now the only
          step is to get real diagnosis in case you feel you need it.
          A lot people still believe mental health checkup and wellbeing is a luxury. But the truth is way 
          far from it. It is the one of the most important thing one should be investing in.
          Still, you have completed the survey and got your planner. We suggest not to close the window in
          order to get planner notifications. There is no point of planner, if you don't follow it.
          So, try to stick to it as much as possible or get inspiration and make your own planner.
          But anyways, be positive, be healthy and
          <br></br>
          <text style={{color: "FFDB58"}}>Thank You!</text>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FinalPage;
