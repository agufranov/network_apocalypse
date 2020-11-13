import React, { useState } from "react";
import styled from "styled-components";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";

const Notebook = ({
  isOpen,
  onOpen,
  isWorking
}) => {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
      <Button onClick={onOpen} />
      <Box isOpen={isOpen}>
        {isWorking ? 'Working!' : 'Not working'}
        {currentStep === 1 && <Form1 onSuccess={() => setCurrentStep(2)}/>}
        {currentStep === 2 && <Form2 onSuccess={() => setCurrentStep(3)}/>}
        {currentStep === 3 && 'Success!'}
      </Box>
    </>
  )
}

const Button = styled.div`
  width: 50px;
  height: 50px;
  left: 25%;
  top: 25%;
  background-color: #FFAAEE;
  position: absolute;
`

const Box = styled.div`
  width: ${props => props.isOpen ? '400px' : '50px'};
  height: ${props => props.isOpen ? '50%' : '50px'};
  left: ${props => props.isOpen ? '30%' : '25%'};
  top: ${props => props.isOpen ? '10%' : '25%'};
  background-color: #FF88EE;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
`
export default Notebook;