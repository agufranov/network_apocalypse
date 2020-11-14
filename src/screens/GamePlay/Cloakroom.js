import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"
import CloakroomSVG from "../../assets/images/CloakroomSVG"

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
        <CloakroomSVG selectedDresses={selectedDresses}/>
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
  width: 25%;
  height: 40%;
  right: 25%;
  bottom: 20%;
  background-color: transparent;
  position: absolute;
  cursor: pointer;
`

const Box = styled.div`
  width: ${props => props.isOpen ? '35%' : '25%'};
  height: ${props => props.isOpen ? '50%' : '40%'};
  right: ${props => props.isOpen ? '25%' : '25%'};
  bottom: ${props => props.isOpen ?'15%': '20%'};
  background-color: transparent;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
`

const Commutator = styled.div`
  width: 30%;
  height: 10%;
  left: 8%;
  top: 15%;
  background-color: transparent;
  //border: 1px solid white;
  position: absolute;
  transition: all ease 0.3s;
  cursor: pointer;
`

const dresses = {
  hat: styled.div`
    width: 35%;
    height: 15%;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 7%;
    left: 45%;
    //border: ${props => props.isSelected ? '3px solid yellow' : 'none'};
    box-sizing: border-box;
    cursor: pointer;
  `,
  shoes: styled.div`
    width: 40%;
    height: 15%;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 60%;
    //border: ${props => props.isSelected ? '3px solid yellow' : 'none'};
    box-sizing: border-box;
    cursor: pointer;
  `,
  pants: styled.div`
    width: 40%;
    height: 40%;
    background: transparent;
    border-radius: 50%;
    position: absolute;
    top: 40%;
    left: 10%;
    //border: ${props => props.isSelected ? '3px solid yellow' : 'none'};
    box-sizing: border-box;
    cursor: pointer;
  `
}

export default Cloakroom;