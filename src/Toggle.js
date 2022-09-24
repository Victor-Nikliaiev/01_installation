import React, { Component } from 'react';

export class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isToggleOn: true,
		};
	}

	handleClick(message, e) {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
		console.log(message);
		console.log(e);
	}

	render() {
		const message = 'Testing one';
		return (
			<div>
				<button onClick={this.handleClick.bind(this, message)}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}
