import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;
    const wrongAnswers = userAnswers.length - skippedAnswers - correctAnswers;

    const skippedShare = Math.round((skippedAnswers / userAnswers.length) * 100);
    const correctShare = Math.round((correctAnswers / userAnswers.length) * 100);
    const wrongShare = Math.round((wrongAnswers / userAnswers.length) * 100);
    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">Correct answers</span>
                </p>
                <p>
                    <span className="number">{wrongShare}%</span>
                    <span className="text">Wrong answers</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((userAnswer, index) => {
                    let answer = userAnswer ? userAnswer : "Skipped";
                    let cssClass = "user-answer";

                    if (answer === "Skipped") {
                        cssClass += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct";
                    } else {
                        cssClass += " wrong";
                    }

                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer}</p>
                        </li>
                    );
                })}
                ;
            </ol>
        </div>
    );
}
