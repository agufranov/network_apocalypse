import React from "react";
import styled from "styled-components";
import {themes} from "../constants/Colors"

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Container
        className="login"
        style={{ backgroundColor: themes.dark.allBackground, fontSize: 20, fontWeight: 'bold' }}
      >
        <form
          style={{ position: 'absolute', top: 0, bottom: 0, background: '#606060', width: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          onSubmit={e => {
            e.preventDefault()
            this.props.onLogin()
          }}
        >
          <img src="./logo.png" style={{ width: '100%', marginBottom: 50 }} />
          <div>
            <div>Введи свое имя:</div>
            <input value={this.props.username} onChange={e => this.props.onChange(e.target.value)} />
          </div>
          <button>Зажечь свет</button>
        </form>
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