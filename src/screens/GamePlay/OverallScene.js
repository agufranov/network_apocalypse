import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"
import { Animations } from "../../constants/Animations"
import Cloakroom from "./Cloakroom";
import Overlay from "./Overlay";

export default class OverallScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scenes: {
        cloakroom: false
      }
    }
  }

  closeAll = () => {
    this.setState({ scenes: { cloakroom: false }})
    setTimeout(() => {
      this.setState({ overlay: false })
    }, Animations.duration)
  }

  openScene = name => {
    this.setState({ overlay: true })
    setTimeout(() => {
      this.setState({ scenes: { [name]: true } })
    }, Animations.duration)
  }

  render() {
    const { scenes, overlay } = this.state

    return (
      <Container
        style={{ backgroundColor: themes.dark.allBackground }}
      >
        <pre>{JSON.stringify(this.state)}</pre>
        <Main
          style={{ backgroundColor: themes.dark.Background1 }}
        ></Main>
        <Cloakroom isOpen={scenes.cloakroom} onOpen={() => this.openScene('cloakroom')}/>
        <Overlay isOpen={overlay} onClose={this.closeAll} />
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


