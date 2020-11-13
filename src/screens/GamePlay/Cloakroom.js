import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

const Cloakroom = ({
  isOpen,
  onOpen,
  allDresses,
  onDressToggle,
  selectedDresses,
  onCommutatorClick
}) => {
  return (
    <>
      <Button onClick={onOpen} />
      <Box isOpen={isOpen}>
        {allDresses.map(dress =>  {
          const DressComponent = dresses[dress];
          return <DressComponent key={dress} onClick={() => onDressToggle(dress)} isSelected={selectedDresses[dress]} />
        })}
        <Commutator onClick={onCommutatorClick} />
      </Box>
    </>
  )
}

const Button = styled.div`
  width: 50px;
  height: 50px;
  right: 25%;
  bottom: 25%;
  background-color: red;
  position: absolute;
`

const Box = styled.div`
  width: ${props => props.isOpen ? '25%' : '50px'};
  height: ${props => props.isOpen ? '50%' : '50px'};
  right: ${props => props.isOpen ? '30%' : '25%'};
  bottom: ${props => props.isOpen ? 0 : '25%'};
  background-color: brown;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
`

const Commutator = styled.div`
  width: 100px;
  height: 15px;
  left: 40px;
  bottom: 50px;
  background-color: white;
  border: 1px solid white;
  position: absolute;
  transition: all ease 0.3s;
`

const dresses = {
  hat: styled.div`
    width: 20px;
    height: 20px;
    background: blue;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    border: ${props => props.isSelected ? '3px solid yellow' : 'none'};
    box-sizing: border-box;
  `,
  shoes: styled.div`
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 50px;
    border: ${props => props.isSelected ? '3px solid yellow' : 'none'};
    box-sizing: border-box;
  `
}

export default Cloakroom;