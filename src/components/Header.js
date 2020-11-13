import React, { Component } from "react";
import styled, { css } from "styled-components";
import axi from '../functions/axiosf';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      visibilityLogInBlackOut: 'hidden',
      txtColor1: '#d4e4d4',
      txtColor2: '#d4e4d4',
      txtColor3: '#d4e4d4',
      txtColor4: '#d4e4d4',
      txtColor5: '#d4e4d4',
      txtColor6: '#d4e4d4',

    }
  }

  componentDidMount() {
    //console.log(this.props)
  }
 

  render(){
    let w = this.state.open ? 0 : 180
  return (
    <div>
      <div className="burgerButton"
      onClick={()=>{
        this.setState({open: !this.state.open})
        this.props.menuOpenStatusToggle(w)
        }}
      >
        <div className="centerized" data-open={this.state.open+''}>
          <div className="bar1"> </div>
          <div className="bar2"> </div>
          <div className="bar3"> </div>
        </div>
      </div>
    <Container
      className= 'headerContainer'
      style={{
          position: "absolute",
          zIndex: 100,
          width: this.props.menuOpenStatus,
        }}>
      <HeadButtonHome
          className='HeadButton'
          onMouseMove={() => { this.setState({ txtColor1: '#ffcb17' }) }}
          onMouseLeave={() => { this.setState({ txtColor1: '#d4e4d4' }) }}
          onClick={() => { this.props.route('OverallScene')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColor1 }}>Игра</MenuHomeTxt>

      </HeadButtonHome>
      <HeadButtonHome 
        className='HeadButton'
        onMouseMove ={() => { this.setState({ txtColor2: '#ffcb17'})}} 
        onMouseLeave ={() => { this.setState({ txtColor2: '#d4e4d4' }) }} 
          //onClick={() => { this.props.route('Statistic')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColor2}}>Сохраниться</MenuHomeTxt>
        
      </HeadButtonHome>
      <HeadButtonHome
        className='HeadButton'
        onMouseMove={() => { this.setState({ txtColor3: '#ffcb17' }) }}
        onMouseLeave={() => { this.setState({ txtColor3: '#d4e4d4' }) }}
          //onClick={() => { this.props.route('NewGoods')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColor3 }}>Загрузиться</MenuHomeTxt>
       
      </HeadButtonHome>
      <HeadButtonHome
        className='HeadButton'
        onMouseMove={() => { this.setState({ txtColor4: '#ffcb17' }) }}
        onMouseLeave={() => { this.setState({ txtColor4: '#d4e4d4' }) }} 
          onClick={() => { this.props.route('Lavels')}}
        >    
          <MenuHomeTxt style={{ color: this.state.txtColor4 }}>Уровни</MenuHomeTxt>  
      </HeadButtonHome>
      <HeadButtonHome
        className='HeadButton'
        onMouseMove={() => { this.setState({ txtColor5: '#ffcb17' }) }}
        onMouseLeave={() => { this.setState({ txtColor5: '#d4e4d4' }) }}
          onClick={() => { this.props.route('LogIn')}}
        >
          <MenuHomeTxt style={{ color: this.state.txtColor5 }}>Выход</MenuHomeTxt>
        
      </HeadButtonHome>
    </Container>
    </div>
  );
}
}
const Container = styled.div``;


const HeadButtonHome = styled.div``;

const MenuHomeTxt = styled.span`
  font-family: roboto-700;
  height: auto;
  flex: 1 1 0%;
  //color: #d4e4d4;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  transition: 1s;
`;


export default Header;
