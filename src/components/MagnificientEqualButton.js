import React from 'react';
import './MagnificientEqualButton.css';

const MagnificientEqualButton = ({equal, handleClick}) => {
	return (
		<div onClick={() => handleClick(equal)} className="equal-button">
			{equal}
		</div>
	);
};

export default MagnificientEqualButton;