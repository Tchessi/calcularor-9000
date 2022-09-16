import React, { Component } from 'react';

class Historical extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
		};
	}

	componentDidMount() {
		fetch('http://localhost:8000/dbconnect.php/{$infos}')
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.items,
					});
					console.log(result)
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Erreur : {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Chargement…</div>;
		} else {
			return (
				<ul>
					{items.map((item) => (
						<li key={item.name}>
							{item.name} {item.price}
						</li>
					))}
				</ul>
			);
		}
	}
}

export default Historical;