import React from 'react';
import { MailBox } from './MailBox';

const messages = ['React', 'Re: React', 'Re:Re: React'];

function App() {
	return (
		<>
			<MailBox unreadMessages={messages} />
		</>
	);
}

export default App;
