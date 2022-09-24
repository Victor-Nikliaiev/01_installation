import React, { Component } from 'react';
import { LoginButton, LogoutButton } from './buttons';
import { Greeting } from './Greeting';

export class LoginControl extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({
			isLoggedIn: true,
		});
	}

	handleLogoutClick() {
		this.setState({
			isLoggedIn: false,
		});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick.bind(this)} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick.bind(this)} />;
		}

		return (
			<>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</>
		);
	}
}
