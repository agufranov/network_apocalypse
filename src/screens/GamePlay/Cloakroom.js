import React, { Component } from "react";
import styled, { css } from "styled-components";
import {themes} from "../constants/Colors"

export default class Cloakroom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container
        style={{ backgroundColor: themes.dark.allBackground }}
      >
        <Main></Main>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.div`
  display: flex;
  background-color: #E6E6E6;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  height: 100vh;
  width: 100vh;
`;
