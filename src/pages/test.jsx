import React, { useState, useEffect } from "react";
import Header from "../assets/components/header.jsx";
import Footer from "../assets/components/footer.jsx";
import bipolarQuestions from "../assets/illness/bipolar.js";
import ocdQuestions from "../assets/illness/ocd.js";
import schizophreniaQuestions from "../assets/illness/schizo.js";
import depressionQuestions from "../assets/illness/depression.js";
import anxietyQuestions from "../assets/illness/anxiety.js";
import { anxiety_notes, bipolar_notes, depression_notes, ocd_notes, schizo_notes } from "../assets/illness_notes/illness_notes.js";

const allQuestions = [
  ...bipolarQuestions.slice(0, 4),
  ...ocdQuestions.slice(0, 4),
  ...schizophreniaQuestions.slice(0, 4),
  ...depressionQuestions.slice(0, 4),
  ...anxietyQuestions.slice(0, 4),
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function Test() {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentIllness, setCurrentIllness] = useState(null);
  const [illnessResponses, setIllnessResponses] = useState(
    new Map([
      ["Bipolar Disorder", 0],
      ["Obsessive-Compulsive Disorder", 0],
      ["Schizophrenia", 0],
      ["Depression", 0],
      ["Anxiety Disorder", 0],
    ])
  );
  const [yesCount, setYesCount] = useState(0);

  const [biidx, setBiidx] = useState(4);
  const [ocdidx, setOcdidx] = useState(4);
  const [schiidx, setSchiidx] = useState(4);
  const [depidx, setDepidx] = useState(4);
  const [anxidx, setAnxidx] = useState(4);

  useEffect(() => {
    shuffle(allQuestions);
    setQuestions(allQuestions);
  }, []);

  const handleAnswer = (answer) => {
    setQuestionIndex((prevIndex) => prevIndex + 1);
    const currentQuestion = questions[questionIndex];

    let currentIllness = "";
    if (currentQuestion.key === 1) currentIllness = "Bipolar Disorder";
    else if (currentQuestion.key === 2)
      currentIllness = "Obsessive-Compulsive Disorder";
    else if (currentQuestion.key === 3) currentIllness = "Schizophrenia";
    else if (currentQuestion.key === 4) currentIllness = "Depression";
    else currentIllness = "Anxiety Disorder";

    setCurrentIllness(currentIllness);
    setIllnessResponses((prevMap) => {
      const newMap = new Map(prevMap);
      if (answer.isYes) {
        newMap.set(currentIllness, newMap.get(currentIllness) + 1);
        setYesCount((prevCount) => prevCount + 1);
        console.log(yesCount); //testttttttt
      } else if (questionIndex > 19 && !answer.isYes) {
        newMap.set(currentIllness, newMap.get(currentIllness) - 1);
      }
      console.log(newMap); //testtttttttttt
      return newMap;
    });

    console.log(currentIllness);
    console.log(illnessResponses.get(currentIllness));
  };

  const assessMentalHealth = () => {
    const sortedResponses = [...illnessResponses.entries()].sort(
      (a, b) => b[1] - a[1]
    );

    // make changes here: format it accordingly, .link is supposed to be a button
    if (sortedResponses[0][1] > sortedResponses[1][1] + sortedResponses[2][1]) {
      switch(sortedResponses[0][0]){
        case "Bipolar Disorder":
          return `Based on your responses, there are chances of you having ${sortedResponses[0][0]}. \n ${bipolar_notes.text} \n ${bipolar_notes.link}`;
        case "Obsessive-Compulsive Disorder":
          return `Based on your responses, there are chances of you having ${sortedResponses[0][0]}. \n ${ocd_notes.text} \n ${ocd_notes.link}`;
        case "Schizophrenia":
          return `Based on your responses, there are chances of you having ${sortedResponses[0][0]}. \n ${schizo_notes.text} \n ${schizo_notes.link}`;
        case "Depression":
          return `Based on your responses, there are chances of you having ${sortedResponses[0][0]}. \n ${depression_notes.text} \n ${depression_notes.link}`;
        default:
          return `Based on your responses, there are chances of you having ${sortedResponses[0][0]}. \n ${anxiety_notes.text} \n ${anxiety_notes.link}`;
      }
    } else if (yesCount <= questionIndex / 5) {
      return "Hey, it seems like you are perfectly healthy. Good going! Mental health is just as important as physical health.";
    } else {
      switch (sortedResponses[0][0]) {
        case "Bipolar Disorder":
          questions.push(bipolarQuestions[biidx]);
          setBiidx((prevBiidx) => prevBiidx + 1);
          break;

        case "Obsessive-Compulsive Disorder":
          questions.push(ocdQuestions[ocdidx]);
          setOcdidx((prevOcdidx) => prevOcdidx + 1);
          break;

        case "Schizophrenia":
          questions.push(schizophreniaQuestions[schiidx]);
          setSchiidx((prevSchiidx) => prevSchiidx + 1);
          break;

        case "Depression":
          questions.push(depressionQuestions[depidx]);
          setDepidx((prevDepidx) => prevDepidx + 1);
          break;

        case "Anxiety Disorder":
          questions.push(anxietyQuestions[anxidx]);
          setAnxidx((prevAnxidx) => prevAnxidx + 1);
          break;

        default:
          break;
      }
      return "Please answer more questions to get a better diagnosis.";
    }
  };

  useEffect(() => {
    console.log(currentIllness);
    console.log(illnessResponses.get(currentIllness));
  }, [illnessResponses, currentIllness]);

  return (
    <div>
      <Header />
      <div className="quiz">
        {questionIndex < questions.length ? (
          <div className="question" id="question-container">
            <p>{questions[questionIndex].text}</p>
            <ul>
              {questions &&
                questions.length > 0 &&
                questions[questionIndex] &&
                questions[questionIndex].answerOptions.map(
                  (answerOption, index) => (
                    <li key={index}>
                      <button onClick={() => handleAnswer(answerOption)}>
                        {answerOption.answerText}
                      </button>
                    </li>
                  )
                )}
            </ul>
          </div>
        ) : (
          <div className="result">
            <p>{assessMentalHealth()}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Test;
