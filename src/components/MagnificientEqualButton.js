import React from 'react';
import './MagnificientEqualButton.css';

const MagnificientEqualButton = ({equal, saveBtn, color, handleClick}) => {
	return (
		<div onClick={() => handleClick(equal)} className="equal-button" style={{ backgroundColor: color}}>
			{equal}
			{saveBtn}
		</div>
	);
};

export default MagnificientEqualButton;