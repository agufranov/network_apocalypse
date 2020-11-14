import React from "react";
import styled from "styled-components";
import { themes } from "../../constants/Colors"
import { Animations } from "../../constants/Animations"
import Overlay from "./Overlay";
import Cloakroom from "./Cloakroom";
import Notebook from "./Notebook";
import Commutator from "./Commutator";
import PromoText from "./PromoText";
import OveralSceneSVG from "../../assets/images/location1-01"
import {lay} from "../../constants/Layout"
import { over, inc, lensProp } from 'ramda'
import Lan1SVG from "../../assets/images/Lan1SVG"
import Lan2SVG from "../../assets/images/Lan2SVG"
import BRMZSVG from "../../assets/images/BRMZSVG"
import GooseSVG from "../../assets/images/GooseSVG"

const ALL_DRESSES = ['hat', 'shoes', 'pants']

export default class OverallScene extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // isStart: true,
      isStart: false,
      overlay: false,
      // overlay: true,
      overlayLoading: false,
      scenes: {
        cloakroom: false,
        notebook: false,
        // notebook: true,
         commutator: false
        // commutator: true
      },
      selectedDresses: {
        hat: false,
        shoes: false,
        pants: false,
      },
      // selectedDresses: {
      //   hat: true,
      //   shoes: true,
      //   pants: true,
      // },
      isNotebookOnceOpened: false,
      // isNotebookOnceOpened: true,
      isCommutatorActivated: false,
      // isCommutatorActivated: true,
      // onIPsCorrect: true,
      // onValidBrmz1: true,
      // onValidBrmz2: true,
      // goose: false
    }
  }

  containerRef = (el) => {
    if (el) {
      el.scrollTo((lay.window.height - window.innerWidth) / 2, 0)
    }
  }

  endStart=()=>{
    this.setState({isStart: false})
  }

  toggleOverlay = (isOpened) => new Promise((resolve, reject) => {
    this.setState({ overlay: isOpened, overlayLoading: true })
    setTimeout(() => {
      this.setState({ overlayLoading: false })
      resolve()
    }, Animations.duration)
  })

  closeAll = () => new Promise((resolve, reject) => {
    this.setState({ scenes: { cloakroom: false }, overlayLoading: true })
    setTimeout(() => {
      this.setState({ overlay: false, overlayLoading: false })
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
    if (this.isDressed() && this.state.isNotebookOnceOpened) {
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

  onGoose = () => {
    this.setState({ goose: true })
    setTimeout(() => this.setState({ goose: false }), 2300)
  }

  render() {
    const {
      scenes,
      overlay,
      overlayLoading,
      selectedDresses,
      isCommutatorActivated,
      isNotebookOnceOpened,
      isStart,
      onIPsCorrect
    } = this.state

    return (
      <Container
        ref={this.containerRef}
        style={{ 
          backgroundColor: themes.dark.allBackground,
             }}
      >
        {isStart && <PromoText endStart={() => this.endStart()}/>}
        <Main
          style={{
              backgroundColor: themes.dark.Background1,
              height: lay.window.height,
              width: lay.window.height,
              flex: "0 0 " + lay.window.height + "px",
              alignSelf: "center",
              margin: "0 auto",
              overflow: 'hidden'
             }}
        >
          <OveralSceneSVG
            selectedDresses={selectedDresses}
            isCommutatorActivated={isCommutatorActivated}
          ></OveralSceneSVG>
          <Cloakroom
            isOpen={scenes.cloakroom}
            onOpen={() => this.openScene('cloakroom')}
            allDresses={ALL_DRESSES}
            onDressToggle={this.toggleDress}
            selectedDresses={selectedDresses}
            onCommutatorClick={this.onCommutatorClick}
            isNotebookOnceOpened={isNotebookOnceOpened}
            isCommutatorActivated={isCommutatorActivated}
          />
          {this.isDressed() &&
            <Notebook
              isOpen={scenes.notebook}
              onOpen={this.openNotebook}
              isWorking={isCommutatorActivated}
              selectedDresses={selectedDresses}
              onIPsCorrect={() => { this.setState({ onIPsCorrect: true})}}
              onValid1={() => this.setState({ onValidBrmz1: true})}
              onValid2={() => this.setState({ onValidBrmz2: true })}
              onGoose={this.onGoose}
              onQuizStepComplete={(step, num, isRight) => console.log(step, num, isRight)}
            />
          }
          <Commutator isOpen={scenes.commutator} onIPsCorrect={onIPsCorrect} />
          <Lan1SVG onIPsCorrect={onIPsCorrect} />
          <Lan2SVG onIPsCorrect={onIPsCorrect} />
          <BRMZSVG leftPosition={this.state.onValidBrmz1 ? '20%' : '-20%'} topPosition={this.state.onValidBrmz1 ? '10%' : '-10%'} />
          <BRMZSVG leftPosition={this.state.onValidBrmz2 ? '70%': '20%'} topPosition={this.state.onValidBrmz2 ? '17%' : '-10%'} />
          <GooseSVG goose={this.state.goose} leftPosition={this.state.goose ? '20%': '70%'} topPosition={this.state.goose ? '10%' : '17%'} />
          <Overlay isOpen={overlay} isLoading={overlayLoading} onClose={this.closeAll} />
        </Main>
      </Container>
    );
  }
}

const Container = styled.div`
display: block;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
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
