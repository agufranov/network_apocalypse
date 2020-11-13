import React, { Component } from "react";
import styled, { css } from "styled-components";
import {themes} from "../constants/Colors"

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <Container
        style={{ backgroundColor: themes.dark.allBackground}}
      >

      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const TextInput = styled.input`
  font-family: Roboto-300;
  font-style: normal;
  height: 40px;
  width: 320px;
  border: none;
  background: #121212;
  margin: 5px;
  border-radius: 8px;
  padding-left: 20px;
`;


export default LogIn;