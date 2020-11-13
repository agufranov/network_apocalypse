import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

export default class OverallScene extends React.Component {
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
        <Main
          style={{ backgroundColor: themes.dark.Background1 }}
        ></Main>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  height: 100vh;
  width: 100vh;
  box-shadow: inset 0 0 20px 4px black;
`;


