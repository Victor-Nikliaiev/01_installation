import React from 'react';

export class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date(),
		});
	}

	render() {
		return (
			<>
				<h1>Here the time comes...</h1>
				<h2>Now it's {this.state.date.toLocaleTimeString()}</h2>
			</>
		);
	}
}
