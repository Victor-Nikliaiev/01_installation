export function Comment(props) {
	return (
		<div className='Comment'>
			<UserInfo user={props.author} />
			<div className='Comment-text'>{props.text}</div>
			<div className='Comment-date'>{props.date}</div>
		</div>
	);
}

function Avatar(props) {
	return (
		<img
			className='Avatar'
			src={props.author.avatorUrl}
			alt={props.author.name}
		/>
	);
}

function UserInfo(props) {
	return (
		<div className='UserInfo'>
			<Avatar user={props.author} />
			<div className='UserInfo-name'>{props.author.name}</div>
		</div>
	);
}
