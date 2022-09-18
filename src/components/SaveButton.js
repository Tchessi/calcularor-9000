import React from 'react';
import './SaveButton.css';

const SaveButton = ({ saveBtn, color, handleClick }) => {
	
	return (
		<div id="mySavebtn" onClick={() => handleClick(saveBtn)}>
			{color}
			{saveBtn}
		</div>
	);
};

export default SaveButton;