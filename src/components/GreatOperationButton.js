import React from 'react';
import './GreatOperationButton.css'

const GreatOperationButton = ({operationbtn}) => {
	return (
		<div className="operation-btn" id='operation-active-btn'>
			{operationbtn}
		</div>
	);
};

export default GreatOperationButton;