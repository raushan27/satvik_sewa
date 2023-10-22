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
        </div><br></br>
        {/* write this in dialogue box style */}
        <div>
          Hello! This app is made to diagnos if you have some form of any mental illness, but more than diagnos, it is meant to make people more aware of mental illnesses.
          As awareness of mental illness is already increasing in the world, still there is a lot of resistance regarding getting checked by a psychiatrist.
          That's exactly where this app steps in to help! Questionnere is prepared with the help of doctors and gradually takes a decision.
          Users are advised to be as accurate as possible to get as accurate result as possible.
        </div>
        <br></br>
        {/* Write this in Note style with light yellow or brown bg */}
        <div>
          Note: This website do not hold any guarantee of diagnosed illnesses. Users are advised to take diagnos as a hint for possibility and not final result.
          You have to contact respective medical authority for any concrete verification.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
