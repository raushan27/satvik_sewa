const allQuestions = [
    ...bipolarQuestions.slice(0, 4),
    ...ocdQuestions.slice(0, 4),
    ...schizophreniaQuestions.slice(0, 4),
    ...depressionQuestions.slice(0, 4),
    ...anxietyQuestions.slice(0, 4)
];


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(allQuestions);

const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

let questionIndex = 0;
let illnessResponses = new Map();
illnessResponses.set("Bipolar Disorder", 0);
illnessResponses.set("Obsessive-Compulsive Disorder", 0);
illnessResponses.set("Schizophrenia", 0);
illnessResponses.set("Depression", 0);
illnessResponses.set("Anxiety Disorder", 0);
let yesCount = 0, biidx = 4, ocdidx = 4, schiidx = 4, depidx = 4, anxidx = 4;

function showQuestion() {
    if (questionIndex <= allQuestions.length) {
        questionElement.textContent = allQuestions[questionIndex].text;
    } else {
        questionElement.textContent = "Seems like your input is not clearly thought, We'ld like to address that it will only help if you enter correct information!";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    }
}

function assessMentalHealth() {
    if (questionIndex >= 19) {
        const sortedResponses = [...illnessResponses.entries()].sort((a, b) => b[1] - a[1]);

        if (sortedResponses[0][1] > sortedResponses[1][1] + sortedResponses[2][1]) {
            questionElement.textContent = `Based on your responses, it seems you may have ${sortedResponses[0][0]}.`;
            yesButton.style.display = "none";
            noButton.style.display = "none";
        }

        else if(yesCount <= questionIndex / 5){
            questionElement.textContent = "Hey, it seems like you are perfectly healthy, Good going, Mental Health is just as important as physical health";
            yesButton.style.display = "none";
            noButton.style.display = "none";
        }

        else{
            if(sortedResponses[0][0] === "Bipolar Disorder"){
                allQuestions.push(bipolarQuestions[biidx]);
                biidx++;
            }
            else if(sortedResponses[0][0] === "Obsessive-Compulsive Disorder"){
                allQuestions.push(ocdQuestions[ocdidx]);
                ocdidx++;
            }
            else if(sortedResponses[0][0] === "Schizophrenia"){
                allQuestions.push(schizophreniaQuestions[schiidx]);
                schiidx++;
            }
            else if(sortedResponses[0][0] === "Depression"){
                allQuestions.push(depressionQuestions[depidx]);
                depidx++;
            }
            else{
                allQuestions.push(anxietyQuestions[anxidx]);
                anxidx++;
            }
        }
    }
}

function recordResponse(response) {
    const currentQuestion = allQuestions[questionIndex];
    let currentIllness = "";
    if(currentQuestion.key === 1)   currentIllness = "Bipolar Disorder";
    else if(currentQuestion.key === 2)  currentIllness = "Obsessive-Compulsive Disorder";
    else if(currentQuestion.key === 3)  currentIllness = "Schizophrenia";
    else if(currentQuestion.key === 4)  currentIllness = "Depression";
    else    currentIllness = "Anxiety Disorder";

    if (response === "Yes") {
        illnessResponses.set(currentIllness, (illnessResponses.get(currentIllness) || 0) + 1);
        yesCount++;
    }
    else if(questionIndex > 19 && response === "No"){
        illnessResponses.set(currentIllness, (illnessResponses.get(currentIllness)) - 1);
    }
    console.log(currentIllness);
    console.log(illnessResponses.get(currentIllness));

    questionIndex++;
    showQuestion();
    assessMentalHealth();
}

yesButton.addEventListener("click", () => recordResponse("Yes"));
noButton.addEventListener("click", () => recordResponse("No"));

showQuestion();