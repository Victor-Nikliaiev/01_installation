function activateLasers() {
	alert('Lasers have been activated :D');
}

function handleSubmit(e) {
	e.preventDefault();
	alert('Submit was handled :D');
}

export function Welcome(props) {
	return (
		<>
			<h1>Hello, {props.name}</h1>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Submit the form!</button>
			</form>
		</>
	);
}
