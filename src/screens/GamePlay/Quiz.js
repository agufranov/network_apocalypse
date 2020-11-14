import React, { useState } from "react";
import cn from "classnames"

export const Quiz = ({
    questions,
    step,
    changeStep,
    onFinish
}) => {
    const question = questions[step]
    const [answers, setAnswers] = useState([])
    const selectedAnswer = answers[step] && answers[step].num
    const doAnswer = (num, isRight) => {
        if (selectedAnswer !== undefined) return
        setAnswers({
            ...answers,
            [step]: {
                num,
                isRight
            }
        })
        if (step < questions.length - 1) {
            setTimeout(() => changeStep(step + 1), 1000)
        } else {
            setTimeout(() => onFinish(), 1000)
        }
    }
    return (
        <div className="quiz">
            <div>{step + 1} / {questions.length}</div>
            <div>{question.text}</div>
            <div className="quiz-buttons">
                {question.answers.map((answer, i) => (
                    <button
                        key={`${step}_${i}`}
                        className={cn('quiz-button', {
                            'quiz-button--selected': selectedAnswer === i,
                            'quiz-button--right': answer.isRight,
                            'quiz-button--wrong': !answer.isRight
                        })}
                        onClick={() => doAnswer(i, answer.isRight)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    )
}