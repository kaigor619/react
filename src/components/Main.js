import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';
import Slider from './Slider';

const Repair=styled.div`
	color: #ffffff;
	font-weight: 700;
	font-size: 40px;
	line-height:50px;

	span{
		display:block;
		font-size: 24px;
		line-height: 30px;
		margin-top:6px;

	}
`
const MainText = styled.p`
	margin-top:54px;
	width: 486px;
	color: #ffffff;
	font-size: 18px;
	font-weight: 300;
	line-height: 28px;
`
const BtnSend =styled.a`
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;
	padding:20px 30px;
	background:#ffa14b;
	border-radius:30px;
	display:inline-block;
	margin-top:32px;

	&:hover{
		text-decoration:none;
		color:#fff;
		background:#ffa14b;

	}
`

class Main extends React.Component {
	render(){
		return (
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span>iphone за 35 минут и гарантия 1 год</span>
					</Repair>
					<MainText>
						Оставьте заявку на бесплатную диагностику без очереди,
						и получите защитное стекло, стоимостью 1000 рублей,
						с установкой в подарок!
					</MainText>
					<BtnSend>Отправить заявку!</BtnSend>
				</Col>
				<Col lg={6} lgoffset={1}>
					<Slider />

				</Col>
			</Row>
			)
	}
}


export default Main