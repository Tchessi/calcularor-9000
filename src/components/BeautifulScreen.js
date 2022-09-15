import React from 'react';
import './BeautifulScreen.css';

const BeautifulScreen = ({ text, result }) => {
	return (
		<div className="input-wrapper" data-id="1" data-operation="3+3">
			<div className="result">
				<h2>
					{result}
				</h2>
			</div>
			<div className="text">
				<h3>{text}</h3>
			</div>
		</div>
	);
};

export default BeautifulScreen;