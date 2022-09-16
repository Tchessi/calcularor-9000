import React from 'react';
import './SaveButton.css';

const SaveButton = ({ saveBtn, color }) => {
	
	return (
		<div id="mySavebtn" style={{ backgroundColor: color }}>
			{color}
			{saveBtn}
		</div>
	);
};

export default SaveButton;