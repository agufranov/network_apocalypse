import React, { useState } from "react";
import styled from "styled-components";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import NotebookSVG from "../../assets/images/notebookSVG"
import CableSVG from "../../assets/images/CableSVG"
import { Animations } from "../../constants/Animations"
import { Quiz } from './Quiz'
import { over, inc, lensProp } from 'ramda'
import { quizQuestions } from "./quizQuestions"
import PlugLAN from "../../assets/images/PlugLAN.svg"

const Notebook = ({
  isOpen,
  onOpen,
  isWorking,
  selectedDresses,
  onIPsCorrect,
  onValid1,
  onValid2,
  onGoose,
  onQuizStepComplete,
  onFinish
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [quizStep, setQuizStep] = useState(0)
  const onStepComplete = (step, num, isRight) => {
    onQuizStepComplete(step, num, isRight)
    setQuizStep(quizStep + 1)
  }
  return (
    <>
      {selectedDresses.hat && selectedDresses.shoes && selectedDresses.pants && <Button onClick={onOpen} />}
      <Box className="notebook" isOpen={isOpen}>
        <NotebookSVG />
        <Wrapper>
          <InnerWrapper>
            {isWorking ? <>
              {currentStep === 1 &&
                <Form1
                  onSuccess={() => { console.log(1); setCurrentStep(2) }}
                  onIPsCorrect={onIPsCorrect}
                />
              }
              {currentStep === 2 &&
                <Form2
                  onSuccess={() => {
                    onGoose()
                    setCurrentStep(3)
                  }}
                  onValid1={onValid1}
                  onValid2={onValid2}
                />
              }
              {currentStep === 3 &&
                <Quiz
                  questions={quizQuestions}
                  step={quizStep}
                  onStepComplete={onStepComplete}
                  onFinish={() => onFinish()}
                />
              }
            </>
              : <FirstDiv>
                  <img src={PlugLAN} style={{height: '80%'}}/> 
                </FirstDiv>
            }
          </InnerWrapper>
        </Wrapper>
      </Box>
    </>
  )
}

const Button = styled.div`
  width: 15%;
  height: 12%;
  left: 13%;
  bottom: 10%;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
`

const Box = styled.div`
  width: 50%;
  height: 35%;
  left: 25%;
  bottom: 20%;
  background-color: 'transparent';
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: ${props => props.isOpen ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(-53%, 60%, 0) scale(0.1)'};
  transition: all ease ${Animations.duration}ms;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 31px 23px 25px 23px;
  box-sizing: border-box;
  z-index: 2000;
`

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  position: relative;
  background: darkslategray;
`

const FirstDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Notebook;
