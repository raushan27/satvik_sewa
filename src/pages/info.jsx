import React, { useState } from "react";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer.jsx";
import "./info.css";
import { useNavigate } from "react-router-dom";

function Info() {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    working_hours: "",
    gender: "",
    sleeping_hours: "",
    email: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/planner")
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  setTimeout(() => {
    Notification.requestPermission()
    .then(() => {
      const date = new Date;
      const hours = date.getHours();
      const minutes = date.getMinutes();
      console.log(minutes)
      if(hours == '07' && minutes == '00'){
        const notification = new Notification("Good Morning! Go Drink water" , {
          body: "Wake up! One of the most important things one can do for good mental healthbeing is fixing sleep schedule. If one has a fixed sleep and wake time, it helps not only for quantity but quality sleep also"
        })
      }
      else if(hours == '07' && minutes == '15'){
        const notification = new Notification("Let's do active mental wellbeing activities!", {
          body: "Meditation, Mindful breathing is easily one single antitode to all focus problems you might have in life. Besides, there is very little left in the world to say about meditation that you might not have heard. So let's start now! After that gratitude practise is to be done either alternatively or both. No need to exaggerate about that either"
        })
      }
      else if(hours == '07' && minutes == '30'){
        const notification = new Notification("Physical health is inseperable to mental health!", {
          body: "Trust me, it's going to be awesome! That's what she said! Little stretching, light exercises like jumping jacks, squats, push ups and not so cool cardio ex. skipping rope, little jog"
        })
      }
      else if(hours == '08' && minutes == '00'){
        const notification = new Notification("Let's have a healthy breakfast!", {
          body: "Trust me on this! I am not going to force you to eat healthy all the day, but this part is important. Having healthy breakfast gets you ready for the day and recharges you for the beautiful day ahead or atleast if the day is not beautiful, it just gets you through it"
        })
      }
      else if(hours == '13' && minutes == '00'){
        const notification = new Notification("Long time no see! How's the day going? Beautiful or getting through?", {
          body: "After you have a lunch, take a short break to relax and clear your mind. Best would be if you go to a short walk, if not alternative good idea can be to reflect journal, write down about your feelings and thoughts, good or bad doesn't matter, just write it! And drink water!!!"
        })
      }
      else if(hours == '19' && minutes == '00'){
        const notification = new Notification("Back Home or what?!", {
          body: "Ideally at this time, you should be out, enjoying with friends but not everyday is same I guess. At this time, try to engage in a calming activity like reading, listening to music, etc. Most important is to do digital detox, In general also, being away from social media or phone is good but this time around, try to stay away seriously and later prepare to sleep"
        })
      }
      else if(hours == '23' && minutes == '00'){
        const notification = new Notification("All right! Long day huh?!", {
          body: "Back to den! It's time to sleep, I cannot emphasise enough about the effects of fixing sleep schedule on mental health. Now sleep! You deserve the rest now. Tommorow's going to be an adventorous day again! Don't you wanna welcome it with your fullest!"
        })
      }
    })
  }, 60000)


  return (
    <div className="wrapper">
      <Header />
      <div className="user-info">
        <div className="info-text">
          <p>Before proceeding to the Planner, we require some information:</p>
        </div>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="name-input">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={userDetails.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="column-inputs">
            <div className="input-row">
              <input
                type="number"
                id="age"
                name="age"
                placeholder="Age"
                value={userDetails.age}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <select
                id="gender"
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
                className="input-field"
                aria-label="gender"
              >
                <option value="gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-row">
              <input
                type="number"
                id="working_hours"
                name="working_hours"
                placeholder="Working Hours"
                value={userDetails.working_hours}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                id="sleeping_hours"
                name="sleeping_hours"
                placeholder="Sleeping Hours"
                value={userDetails.sleeping_hours}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
            <div className="input-row">
              <input
                type="number"
                id="busytstart"
                name="busytstart"
                placeholder="I am busy from ... (ex 0900 means 9 am)"
                value={userDetails.busytstart}
                onChange={handleInputChange}
                className="input-field"
              />
              <input
                type="number"
                id="busytend"
                name="busytend"
                placeholder="I am busy till ... (ex 1700 means 5 pm)"
                value={userDetails.busytend}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Info;
