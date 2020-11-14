import React from "react";
import styled from "styled-components";
import RouterSVG from "../../assets/images/RouterSVG"

const Commutator = ({
  isOpen,
  onOpen,
}) => {
  return (
    <>
      <Box isOpen={isOpen}>
        <RouterSVG/>
      </Box>
    </>
  )
}

const Box = styled.div`
  width: ${props => props.isOpen ? '50%' : '50px'};
  height: ${props => props.isOpen ? '4%' : '10px'};
  left: ${props => props.isOpen ? '25%' : '50%'};
  bottom: ${props => props.isOpen ? '6%' : '20%'};
  background-color: transparent;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 20;
  transition: all ease 0.9s;
`
export default Commutator;