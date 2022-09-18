import { useState, useEffect } from 'react';

function Historical() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);


	useEffect(() => {
		const requestOptions = {
			mode: 'cors',
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(),
		};
		fetch('http://localhost:8000/dbconnect.php', requestOptions)
			.then((data) => data.json())
			.then(
				(data) => {
					setIsLoaded(true);
					setItems(data.items);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
				);
			}, []);
			;

	if (error) {
		return <div id="history-error"><span>Erreur</span> : {error.message}</div>;
	} else if (!isLoaded) {
		return <div>Chargement...</div>;
	} else {
		return (
			<ul>
				{items.map((item) => (
					<li key={item.operation}>
						{item.operation} {item.total}
					</li>
				))}
			</ul>
		);
	}
}

export default Historical;
