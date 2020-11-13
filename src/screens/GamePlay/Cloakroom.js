import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

const Cloakroom = ({
  isOpen,
  onOpen
}) => {
  return (
    <>
      <Button onClick={onOpen} />
      <Box isOpen={isOpen}/>
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
`;

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
`;

export default Cloakroom;