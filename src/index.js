import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function Hello(){
	let phrase='Worl'
	return (
		<h1>Hello {phrase}</h1>
		)
}
function FullName(prop){
	return (
		<div>
		<h1>Мое имя- {prop.name}, моя фамилия-{prop.surname}</h1>
		<a href={prop.link}>Ссылка на мой профиль</a>
		</div>
		)
}

function MeetAll(){
	return (
		<div>
			<FullName name="Igor" surname="Puzhakov" link="google.com" />
			<FullName name="Alina" surname="Puzhakova" link="google.com" />
			<FullName name="Alexandr" surname="Puzhakov" link="google.com" />
		</div>
		)
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
