import React from "react";
import styled from "styled-components";
import { themes } from "../constants/Colors"

export default class Lavels extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container
        style={{ backgroundColor: themes.dark.allBackground }}
        className="levels"
      >
        <h1 style={{ color: 'whote', marginTop: 50 }}>Выбор уровня</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 100px' }}>
          <div className="item" onClick={this.props.onSelect}>
            <img src="level.png" />
          </div>
          <div className="item">
            <img src="lock.png" />
          </div>
          <div className="item">
            <img src="lock.png" />
          </div>
          <div className="item">
            <img src="lock.png" />
          </div>
          <div className="item">
            <img src="lock.png" />
          </div>
          <div className="item">
            <img src="lock.png" />
          </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-color: #E6E6E6;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  position: relative;
  height: 100vh;
  width: 100vw;
`;


