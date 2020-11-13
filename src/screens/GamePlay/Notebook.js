import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

const Notebook = ({
  isOpen,
  onOpen,
  isWorking
}) => {
  return (
    <>
      <Button onClick={onOpen} />
      <Box isOpen={isOpen}>
        {isWorking ? 'Working!' : 'Not working'}
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
  width: ${props => props.isOpen ? '25%' : '50px'};
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