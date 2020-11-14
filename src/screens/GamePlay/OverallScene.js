import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"
import { Animations } from "../../constants/Animations"
import Overlay from "./Overlay";
import Cloakroom from "./Cloakroom";
import Notebook from "./Notebook";
import Commutator from "./Commutator";
import PromoText from "./PromoText";
import OveralSceneSVG from "../../assets/images/location1-01"
import {lay} from "../../constants/Layout"

const ALL_DRESSES = ['hat', 'shoes']

export default class OverallScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // isStart: true,
      isStart: false,
      // overlay: false,
      overlay: true,
      scenes: {
        cloakroom: false,
        // notebook: false,
        notebook: true,
        // commutator: false
        commutator: true
      },
      // selectedDresses: {},
      selectedDresses: {
        hat: true,
        shoes: true
      },
      // isNotebookOnceOpened: false,
      isNotebookOnceOpened: true,
      // isCommutatorActivated: false,
      // isCommutatorActivated: false,
      isCommutatorActivated: true,
    }
  }

  containerRef = (el) => {
    console.log(el)
    el.scrollTo((lay.window.height - window.innerWidth) / 4, 0)
  }

  endStart=()=>{
    this.setState({isStart: false})
  }

  toggleOverlay = (isOpened) => new Promise((resolve, reject) => {
    this.setState({ overlay: isOpened })
    setTimeout(resolve, Animations.duration)
  })

  closeAll = () => new Promise((resolve, reject) => {
    this.setState({ scenes: { cloakroom: false } })
    setTimeout(() => {
      this.setState({ overlay: false })
      resolve()
    }, Animations.duration)
  })

  openScene = async name => {
    this.toggleOverlay(true)
    setTimeout(() => {
      this.setState(state => ({
        scenes: {
          ...state.scenes,
          [name]: true
        }
      }))
    }, Animations.duration)
  }

  openNotebook = () => {
    this.openScene('notebook')
    this.setState({ isNotebookOnceOpened: true })
    if (this.state.isCommutatorActivated) {
      this.openScene('commutator')
    }
  }

  onCommutatorClick = async () => {
    if (this.state.isNotebookOnceOpened) {
      this.setState({ isCommutatorActivated: true })
      await this.closeAll()
      this.openNotebook()
    }
  }

  toggleDress = name => this.setState(state => ({
    selectedDresses: {
      ...state.selectedDresses,
      [name]: !this.state.selectedDresses[name]
    }
  }))

  isDressed = () => ALL_DRESSES.every(dress => this.state.selectedDresses[dress])

  render() {
    const {
      scenes,
      overlay,
      selectedDresses,
      isCommutatorActivated,
      isStart
    } = this.state

    return (
      <Container
        ref={this.containerRef}
        style={{ 
          backgroundColor: themes.dark.allBackground,
         
        //height: lay.window.height,
        //width: lay.window.height,
             }}
      >
        {isStart && <PromoText endStart={() => this.endStart()}/>}
        <Main
          style={{
              backgroundColor: themes.dark.Background1,
              height: lay.window.height,
              width: lay.window.height,
              flex: "0 0 " + lay.window.height + "px",
              alignSelf: "center"
             }}
        >
          <OveralSceneSVG
            selectedDresses={selectedDresses}
          ></OveralSceneSVG>
          <Cloakroom
            isOpen={scenes.cloakroom}
            onOpen={() => this.openScene('cloakroom')}
            allDresses={ALL_DRESSES}
            onDressToggle={this.toggleDress}
            selectedDresses={selectedDresses}
            onCommutatorClick={this.onCommutatorClick}
          />
          {this.isDressed() &&
            <Notebook
              isOpen={scenes.notebook}
              onOpen={this.openNotebook}
              isWorking={isCommutatorActivated}
              selectedDresses={selectedDresses}
            />
          }
          <Commutator isOpen={scenes.commutator} />
          <Overlay isOpen={overlay} onClose={this.closeAll} />
        </Main>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
`;


const Main = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  box-shadow: inset 0 0 20px 4px black;
`;


