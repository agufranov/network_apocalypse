import React, { Component } from "react";
import styled, { css } from "styled-components";
import { themes } from "../../constants/Colors"

export default class PromoText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      background: 'transparent',
      text: '',
      textColor: 'transparent',
      stage: 0,
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ 
        background: '#000a',
        text: "Мир людей погрузился во тьму...",
        stage: 1,
        textColor: '#ddd'
      })
    },1000)
  }

  changeText=()=>{
    if(this.state.stage==1){
      this.setState({ textColor: 'transparent'})
      setTimeout(() => {
       this.setState({
        text: "...спаси город от апокалипсиса...",
        stage: 2,
        textColor: '#ddd'
      })
      }, 1000)
      
    }
    if (this.state.stage == 2) {
      this.setState({ textColor: 'transparent' })
      setTimeout(() => {
        this.setState({
          text: "...восстанови VLAN соединение, чтобы...",
          stage: 3,
          textColor: '#ddd'
        })
      }, 1000)
    }
    if (this.state.stage == 3) {
      this.setState({ textColor: 'transparent' })
      setTimeout(() => {
      this.setState({
        text: "...автоматика отключила питание на участке с КЗ",
        stage: 4,
        textColor: '#ddd'
      })
      }, 1000)
    }
    if (this.state.stage == 4) {
      this.setState({ textColor: 'transparent' })
      setTimeout(() => {
      this.setState({
        text: "",
        stage: 0,
        background: 'transparent',
      })
      }, 500)

      setTimeout(() => {
        this.props.endStart()
      }, 1500)
    }
  }


  render() {
    return (
      <Container
        style={{ backgroundColor: this.state.background }}
        onClick={()=>{this.changeText()}}
      >
        <Text
          style={{ color: this.state.textColor }}
        >{this.state.text}</Text>

      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  transition: 1s;
  position: absolute;
`;
const Text = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 25%;
  font-size: 20px;
  transition: 1s;
`;
