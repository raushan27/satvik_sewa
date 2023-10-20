const bipolarQuestions = [
    { key: 1, text: "Do you frequently experience an inflated sense of self-esteem, grandiosity, or a decreased need for sleep during periods of heightened mood?" },
    { key: 1, text: "Are you often talkative, racing from one idea to another, and engaging in risky activities during manic episodes?" },
    { key: 1, text: "Do you experience episodes of depression where you feel overwhelming sadness, lose interest in activities, and experience significant changes in weight and sleep?" },
    { key: 1, text: "Are there times when you engage in impulsive behaviors such as reckless driving, substance abuse, or risky sexual encounters?" },
    { key: 1, text: "Do you often feel pressured to keep talking or have racing thoughts during manic phases?" },
    { key: 1, text: "Are you able to carry out your daily responsibilities and maintain relationships during mood swings?" },
    { key: 1, text: "Do you experience rapid mood swings throughout the day?" },
    { key: 1, text: "Are there times when you feel the need for little sleep, yet remain highly energetic and active?" },
    { key: 1, text: "Have you ever engaged in behaviors that resulted in negative consequences due to your mood swings?" },
    { key: 1, text: "Do you often experience changes in your appetite and weight during mood episodes?" },
    { key: 1, text: "Do you often have extreme mood swings, ranging from periods of high energy and impulsivity to feelings of intense sadness and hopelessness?" },
    { key: 1, text: "Are you frequently bothered by intrusive, distressing thoughts, leading to repetitive actions or mental rituals that you feel compelled to perform?" },
    { key: 1, text: "Are you frequently irritable, have difficulty concentrating, and experience sleep disturbances like insomnia during periods of heightened mood and energy?" },
    { key: 1, text: "Do you often find it challenging to focus on tasks, have racing thoughts, and exhibit impulsive behavior, often regretting your actions later?" }
];

const ocdQuestions = [
    { key: 2, text: "Are you frequently bothered by intrusive, distressing thoughts, leading to repetitive actions or mental rituals that you feel compelled to perform?" },
    { key: 2, text: "Are you preoccupied with certain thoughts, images, or fears that cause you significant distress, leading to repetitive rituals or mental acts?" },
    { key: 2, text: "Do you feel compelled to perform specific actions, like checking locks, repeating phrases, or arranging objects, to alleviate distress caused by persistent, unwanted thoughts?" },
    { key: 2, text: "Are you experiencing difficulties with concentration, mood, or energy levels that result in significant impairment in your daily life, such as at work or in relationships?" },
    { key: 2, text: "Do you engage in repeated hand washing or cleaning rituals due to a fear of contamination?" },
    { key: 2, text: "Are you frequently bothered by intrusive thoughts related to harming others or yourself?" },
    { key: 2, text: "Do you feel the need to count, check, or arrange items in a specific way to reduce anxiety?" },
    { key: 2, text: "Are you often preoccupied with symmetry, order, or the exactness of your thoughts or actions?" },
    { key: 2, text: "Do you avoid certain situations or places due to irrational fears or concerns?" },
    { key: 2, text: "Are you able to recognize that your obsessions and compulsions are excessive or irrational?" },
    { key: 2, text: "Do you frequently engage in mental rituals such as repeating phrases or prayers in your mind?" },
    { key: 2, text: "Are your obsessions and compulsions time-consuming, interfering with your daily life?" },
    { key: 2, text: "Do you experience distress when you are unable to perform your compulsive rituals?" },
    { key: 2, text: "Have you ever sought help or treatment for obsessive-compulsive symptoms?" }
];

const schizophreniaQuestions = [
    { key: 3, text: "Do you experience delusions, hallucinations, or disorganized thinking that makes it difficult to distinguish between reality and imagination?" },
    { key: 3, text: "Do you have difficulty distinguishing between reality and delusions, experiencing false beliefs or suspicions about others?" },
    { key: 3, text: "Are you experiencing difficulties in social interactions, such as trouble reading social cues, making eye contact, or forming close relationships?" },
    { key: 3, text: "Have you experienced a significant decline in your work, social, or self-care abilities?" },
    { key: 3, text: "Are you able to distinguish between hallucinations and reality when they occur?" },
    { key: 3, text: "Do you experience disorganized thinking, making it challenging to communicate coherently?" },
    { key: 3, text: "Have you ever lost interest in social relationships or personal hygiene due to schizophrenia symptoms?" },
    { key: 3, text: "Are you aware that your delusions or hallucinations are not real?" },
    { key: 3, text: "Do you frequently experience apathy or a lack of motivation?" },
    { key: 3, text: "Do you have difficulty following conversations or understanding social cues?" }
];

const depressionQuestions = [
    { key: 4, text: "Have you experienced a persistent low mood for most of the day, nearly every day, for at least two weeks?" },
    { key: 4, text: "Are you often fatigued and experience a loss of energy or motivation?" },
    { key: 4, text: "Do you have difficulty concentrating, making decisions, and remembering details?" },
    { key: 4, text: "Are you frequently preoccupied with thoughts of death or suicidal ideation?" },
    { key: 4, text: "Do you find little to no pleasure or interest in activities you once enjoyed?" },
    { key: 4, text: "Have you experienced significant changes in appetite or weight, unrelated to intentional dieting?" },
    { key: 4, text: "Do you often oversleep or have difficulty sleeping (insomnia)?" },
    { key: 4, text: "Have you lost interest in social interactions or feel socially withdrawn?" },
    { key: 4, text: "Do you often feel hopeless, worthless, or guilty?" },
    { key: 4, text: "Do you experience a loss of interest in previously enjoyed activities, along with feelings of sadness, hopelessness, or emptiness?" },
    { key: 4, text: "Do you have difficulty making decisions, concentrating, or experiencing physical symptoms like muscle tension, restlessness, or fatigue?" },
    { key: 4, text: "Are you exhibiting erratic behavior, such as impulsive spending, reckless driving, and risky sexual encounters, often without considering the consequences?" },
    { key: 4, text: "Do you feel compelled to perform specific actions, like checking locks, repeating phrases, or arranging objects, to alleviate distress caused by persistent, unwanted thoughts?" },
    { key: 4, text: "Are you experiencing difficulties with concentration, mood, or energy levels that result in significant impairment in your daily life, such as at work or in relationships?" }
];

const anxietyQuestions = [
    { key: 5, text: "Do you often feel a sense of impending doom or intense fear, along with physical symptoms like rapid heart rate, trembling, and sweating?" },
    { key: 5, text: "Do you often feel anxious, experiencing excessive worry about various aspects of your life, even when there is no real threat or danger?" },
    { key: 5, text: "Are you often anxious about specific situations, such as social interactions or flying?" },
    { key: 5, text: "Do you experience physical symptoms like sweating, trembling, or heart palpitations when anxious?" },
    { key: 5, text: "Do you often feel the need for little sleep, yet remain highly energetic and active?" },
    { key: 5, text: "Have you ever engaged in behaviors that resulted in negative consequences due to your mood swings?" },
    { key: 5, text: "Do you often experience changes in your appetite and weight during mood episodes?" },
    { key: 5, text: "Are you often worried about various aspects of your life, even when there is no apparent threat?" },
    { key: 5, text: "Do you frequently experience muscle tension or restlessness when anxious?" },
    { key: 5, text: "Have you sought help or treatment for your anxiety symptoms?" },
    { key: 5, text: "Are you able to control or manage your anxiety with relaxation techniques?" },
    { key: 5, text: "Do you experience distress or impairment in your daily life due to anxiety?" },
    { key: 5, text: "Have you had panic attacks or sudden episodes of intense fear and physical symptoms?" },
    { key: 5, text: "Do you avoid situations that provoke anxiety?" }
];

    
const allQuestions = [
    ...bipolarQuestions.slice(0, 4),
    ...ocdQuestions.slice(0, 4),
    ...schizophreniaQuestions.slice(0, 4),
    ...depressionQuestions.slice(0, 4),
    ...anxietyQuestions.slice(0, 4)
];


// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// shuffle(allQuestions);

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
    // Check if we have asked at least 20 questions
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