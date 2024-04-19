import { useState } from "react";
import questions from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    if (activeQuestionIndex === questions.length) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Quiz Complete" />
                <h2>Quiz Complete</h2>
            </div>
        );
    }
    const shuffledAnswers = [...questions[activeQuestionIndex].answers].sort(() => Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer) {
        // setUserAnswers([...userAnswers, selectedAnswer]);
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }

    return (
        <div id="quiz">
            <div id="question">
                <h2>{questions[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer, index) => (
                        <li key={index} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
