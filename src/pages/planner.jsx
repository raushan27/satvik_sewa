import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer";
import { Navigate, useNavigate } from "react-router-dom";

function Planner() {
  const navigate = useNavigate();

  return (
    <div >
      <Header />
      <div className="mainpage">
        <div className="cards">
        <div className="card">
            <img src="https://static.toiimg.com/photo/66084423.cms" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>07:00</h2>Good Morning! Go Drink water</h2>
                <p className="card-description">Wake up! One of the most important things one can do for good mental healthbeing is fixing sleep schedule. If one has a fixed sleep and wake time, it helps not only for quantity but quality sleep also</p>
            </div>
        </div>
        <div className="card">
            <img src="https://templesandmarkets.com.au/cdn/shop/articles/7_Good_Places_to_Place_Buddhas_in_Your_Home_1000x.jpg?v=1600168595" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>07:15</h2>Let's do active mental wellbeing activities!</h2>
                <p className="card-description">Meditation, Mindful breathing is easily one single antitode to all focus problems you might have in life. Besides, there is very little left in the world to say about meditation that you might not have heard. So let's start now! After that gratitude practise is to be done either alternatively or both. No need to exaggerate about that either</p>
            </div>
        </div>
        <div className="card">
            <img src="https://media.post.rvohealth.io/wp-content/uploads/2020/02/man-exercising-plank-push-up-1200x628-facebook.jpg" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>07:30</h2>Physical health is inseperable to mental health!</h2>
                <p className="card-description">Trust me, it's going to be awesome! That's what she said! Little stretching, light exercises like jumping jacks, squats, push ups and not so cool cardio ex. skipping rope, little jog</p>
            </div>
        </div>
        <div className="card">
            <img src="https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7355w-2.jpg" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>08:00</h2>Let's have a healthy breakfast!</h2>
                <p className="card-description">Trust me on this! I am not going to force you to eat healthy all the day, but this part is important. Having healthy breakfast gets you ready for the day and recharges you for the beautiful day ahead or atleast if the day is not beautiful, it just gets you through it</p>
            </div>
        </div>
        <div className="card">
            <img src="https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1584580817296-GJK9OPDWX4YDBVTR788W/taking+a+walk.jpg" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>13:00</h2>Long time no see! How's the day going? Beautiful or getting through?</h2>
                <p className="card-description">After you have a lunch, take a short break to relax and clear your mind. Best would be if you go to a short walk, if not alternative good idea can be to reflect journal, write down about your feelings and thoughts, good or bad doesn't matter, just write it! And drink water!!!</p>
            </div>
        </div>
        <div className="card">
            <img src="https://www.wwf.org.uk/sites/default/files/styles/content_slide_image/public/2017-02/iStock-497311300_0.jpg?h=ac778ff2&itok=Uwzh-vm3" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>19:00</h2>Back Home or what?!!</h2>
                <p className="card-description">Ideally at this time, you should be out, enjoying with friends but not everyday is same I guess. At this time, try to engage in a calming activity like reading, listening to music, etc. Most important is to do digital detox, In general also, being away from social media or phone is good but this time around, try to stay away seriously and later prepare to sleep</p>
            </div>
        </div>
        <div className="card">
            <img src="https://raisingchildren.net.au/__data/assets/image/0023/49280/Sleep-FAQs.jpg" className="card-image" />
            <div className="card-content">
                <h2 className="card-title"><h2>23:00</h2>All right! Long day huh?!</h2>
                <p className="card-description">Back to den! It's time to sleep, I cannot emphasise enough about the effects of fixing sleep schedule on mental health. Now sleep! You deserve the rest now. Tommorow's going to be an adventorous day again! Don't you wanna welcome it with your fullest!</p>
            </div>
        </div>
       </div>
      </div>
      <Footer />
    </div>
  );
}

export default Planner;
