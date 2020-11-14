import React, { useState } from "react";
import styled from "styled-components";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import NotebookSVG from "../../assets/images/notebookSVG"

const Notebook = ({
  isOpen,
  onOpen,
  isWorking,
  selectedDresses,
}) => {
  const [currentStep, setCurrentStep] = useState(2)
  return (
    <>
      {selectedDresses.hat && selectedDresses.shoes && selectedDresses.pants&&<Button onClick={onOpen} />}
      <Box isOpen={isOpen}>
        <NotebookSVG/>
        {isWorking ? <>
          {currentStep === 1 && <Form1 onSuccess={() => {console.log(1);setCurrentStep(2)}} />}
          {currentStep === 2 && <Form2 onSuccess={() => setCurrentStep(3)} />}
          {currentStep === 3 && 'Success!'}
        </>
          : <p>'Not working'</p>
        } 
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
  width: ${props => props.isOpen ? '50%' : '50px'};
  height: ${props => props.isOpen ? '35%' : '50px'};
  left: ${props => props.isOpen ? '25%' : '25%'};
  bottom: ${props => props.isOpen ? '20%' : '25%'};
  background-color: #ACF;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Notebook;