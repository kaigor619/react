import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
                  <div>
                  <FullName name="Igor" surname="Puzhakov" link="google.com" />
                  <FullName name="Alina" surname="Puzhakova" link="google.com" />
                  <FullName name="Alexandr" surname="Puzhakov" link="google.com" />
                  </div>

    );
  }
}

function FullName(prop){
  return (
    <div>
    <h1>Мое имя- {prop.name}, моя фамилия-{prop.surname}</h1>
    <a href={prop.link}>Ссылка на мой профиль</a>
    </div>
    )
}




export default App;