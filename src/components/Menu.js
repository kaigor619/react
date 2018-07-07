import React, { Component } from 'react';


import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';



const Repair =styled.div`
	color: #464646;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime=styled.div`
	color: #2a2a2a;
	font-size: 12px;
	line-height: 24px;
	font-weight: 300;

	span {
		display:block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const BtnOrder= styled.a`
	display:inline-block;
	color: #ffffff;
	font-size: 14px;
	font-weight: 400;
	line-height: 22.04px;
	padding:15px 30px 15px 30px;
	background-color: #3fc7db;
	border-radius:25px;
	// margin-top:17px;
	text-decoration:none;
	transition: .3s;
	margin-left:-20px;

	&:hover{
		text-decoration:none;
		color:#fff;
		background : #1F99AB;
		transition: .3s;
	}
`

// class OrderCall extends React.Component{
// 	render(){
// 		return(
// 			<a>{}</a>
// 			)
// 	}
// }

class Adress extends React.Component{
	render(){
		return(
			<span>{this.props.addr}</span>
			) 
			
		
	}
}


class TelNumber extends React.Component{
	render(){
		return(
			<span>{this.props.tel}</span>
			)
	}

}
class Menu extends React.Component {
	render(){
		return (
				<Row>
					<Col lg={3} lgOffset={1}>
					<Repair>Ремонт айфонов в сервисном центре и на выезде </Repair>
					</Col>
					<Col lg={3}>
						<WorkTime>Пн-пт с 10 до 20, сб,вс с 11 до 18
						<Adress addr='Ленинская 301'>
							
						</Adress>
						</WorkTime>
					</Col>
					<Col lg={3}>
					<WorkTime>Звонки принимаются 24 часа
						<TelNumber tel='8 (846) 922 55 44 '></TelNumber>
					</WorkTime>
					</Col>
					<Col lg={2}>
						<BtnOrder>Заказать звонки !</BtnOrder>
					</Col>
				</Row>
			)
	}
}
export default Menu