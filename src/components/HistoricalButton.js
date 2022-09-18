import React from 'react';
import './SaveButton.css'

const HistoricalButton = ({ Hbtn, handleClick }) => {
	return (
		<div onClick={() => handleClick(Hbtn)} className="hist-btn">
			{Hbtn}
		</div>
	);
};

export default HistoricalButton;