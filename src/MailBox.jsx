import React from 'react';

export const MailBox = props => {
	const unreadMessages = props.unreadMessages;

	return (
		<>
			<h1>Hello, dear User!</h1>
			{unreadMessages.length > 0 && (
				<h2>You have {unreadMessages.length} unread messages</h2>
			)}
		</>
	);
};
