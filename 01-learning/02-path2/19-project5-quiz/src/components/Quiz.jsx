import { useCallback, useState } from "react";
import questions from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTImer";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("");

    const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;

    if (activeQuestionIndex === questions.length) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Complete" />
                <h2>Quiz Complete</h2>
            </div>
        );
    }

    const shuffledAnswers = [...questions[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

    const handleSelectAnswer = useCallback(
        function handleSelectAnswer(selectedAnswer) {
            // setUserAnswers([...userAnswers, selectedAnswer]);
            setAnswerState("answered");
            setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
            setTimeout(() => {
                if (selectedAnswer === questions[activeQuestionIndex].answers[0]) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }
                setTimeout(() => {
                    setAnswerState("");
                }, 2000);
                console.log(answerState);
            }, 1000);
        },
        [activeQuestionIndex]
    );

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer key={activeQuestionIndex} timeout={5000} onTimeout={handleSkipAnswer} />
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer, index) => {
                        const isSlected = userAnswers[userAnswers.length - 1] === answer;
                        let cssClass = "";
                        if (answerState === "answered" && isSlected) {
                            cssClass = "selected";
                        }
                        if ((answerState === "correct" || answerState === "wrong") && isSlected) {
                            cssClass = "wrong";
                        }
                        return (
                            <li key={index} className="answer">
                                <button onClick={() => handleSelectAnswer(answer)} className={cssClass}>
                                    {answer}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
