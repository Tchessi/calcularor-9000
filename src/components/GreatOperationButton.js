import React from 'react';
import './GreatOperationButton.css'

const GreatOperationButton = ({ operationbtn, handleClick }) => {
	return (
		<div
			onClick={() => handleClick(operationbtn)}
			className="operation-btn"
			id="operation-active-btn"
		>
			{operationbtn}
		</div>
	);
};

export default GreatOperationButton;