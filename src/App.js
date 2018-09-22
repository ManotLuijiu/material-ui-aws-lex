import React, { Component } from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';
import NavBar2 from './components/NavBar2';
import New from './components/New';
import New2 from './components/New2';

class App extends Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<NavBar2 />
				<New />
				<New2 />
			</div>
		);
	}
}

export default App;
