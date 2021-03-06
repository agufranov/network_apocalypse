import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";

import styled, { css } from "styled-components";
import "./icons.js";
import LogIn from "./screens/LogIn";
import OverallScene from "./screens/GamePlay/OverallScene"
import Lavels from "./screens/Lavels";
import Header from "./components/Header";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 'LogIn',
      route: this.route(),
      token: '',
      menuOpenStatus: 0,
      menuOpenStatusToggle: this.menuOpenStatusToggle(),
      username: 'Олег'
    }
  }

  componentDidMount() {
    // if (this.state.token = '') { this.setState({ screen: 'LogIn' }) }
  }

  route = (u) => {
    this.setState({ screen: u })
  }

  menuOpenStatusToggle = (u) => {
    this.setState({ menuOpenStatus: u })
  }

  axiUpdate = () => {

  }

  render() {

    return (
      <Container>
        { this.state.screen === 'LogIn' && <LogIn {...this.state} username={this.state.username} onChange={username => this.setState({ username })} onLogin={() => this.setState({ screen: 'OverallScene' })} route={(u) => this.route(u)} />}
        { this.state.screen === 'OverallScene' && <OverallScene props={this.state} />}
        { this.state.screen === 'Lavels' && <Lavels props={this.state} onSelect={() => this.setState({ screen: 'OverallScene' })} />}

        { this.state.screen === '3' && <OverallScene props={this.state} />}
        { this.state.screen === '4' && <OverallScene props={this.state} />}
        {  this.state.screen !== 'LogIn' &&

          <Header
            {...this.state}
            route={(u) => this.route(u)}
            menuOpenStatusToggle={(u) => this.menuOpenStatusToggle(u)}
          ></Header>
        }
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
`;
const HeaderComponentStack = styled.div`
  top: 0px;
  left: 0px;
  width: 160px;
  height: 0px;
  position: fixed;
  z-index: 250;
  overflow-y: visible;
`;
export default App;

{/*
      <Route path="/" exact component={RootScreen} />
       <Route path="/NewGoods/" exact component={NewGoods} />
      <Route path="/NewMenuItem/" exact component={NewMenuItem} />
      <Route path="/Statistic/" exact component={Statistic} /> 
      */}
  /*
  if (this.state.screen == 'NewGoods'){
    return (
      <NewGoods
      props={this.state}>
      </NewGoods>
    );
  }
  if (this.state.screen == 'NewMenuItem') {
    return (
      <NewMenuItem
        props={this.state}>
      </NewMenuItem>
    );
  }
  if (this.state.screen == 'Statistic') {
    return (
      <Statistic
        props={this.state}>
      </Statistic>
    );
  }
*/