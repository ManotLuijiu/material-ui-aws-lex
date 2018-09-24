import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';
import NavBar2 from './components/NavBar2';
import Index from './pages/index';
import New from './components/New';
import New2 from './components/New2';
import ChatBot from './components/ChatBot';
import New3 from './components/New3';
import New4 from './components/New4';
import New5 from './components/New5';
import New6 from './components/New6';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<NavBar2 />
				<Index />
				<New />
				<New2 />
				<New3 />
				<New4 />
				<New5 />
				<New6 />
				<ChatBot />
			</div>
		);
	}
}

export default App;
