import React from 'react';
import './AmazingNumberButton.css';

const AmazingNumberButton = ({ symbol, handleClick }) => {
	return (
		<div
			onClick={() => handleClick(symbol)}
			className="button-wrapper"
			id="buttonActive">
			{symbol}
		</div>
	);
};

export default AmazingNumberButton;
