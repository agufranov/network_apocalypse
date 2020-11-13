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
  width: ${props => props.isOpen ? '25%' : '50px'};
  height: ${props => props.isOpen ? '50%' : '50px'};
  right: ${props => props.isOpen ? '0' : '25%'};
  top: ${props => props.isOpen ? '50%' : '25%'};
  background-color: green;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.3s;
`
export default Commutator;