import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

const Commutator = ({
  isOpen,
  onOpen,
}) => {
  return (
    <>
      <Box isOpen={isOpen}>
      </Box>
    </>
  )
}

const Box = styled.div`
  width: ${props => props.isOpen ? '50%' : '50px'};
  height: ${props => props.isOpen ? '5%' : '10px'};
  left: ${props => props.isOpen ? '25%' : '50%'};
  bottom: ${props => props.isOpen ? '3%' : '20%'};
  background-color: green;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
`
export default Commutator;