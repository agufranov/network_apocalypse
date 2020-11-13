import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../constants/Colors"

export default class Desk extends React.Component {
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

      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-color: #E6E6E6;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`;
