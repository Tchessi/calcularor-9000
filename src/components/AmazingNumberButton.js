import React from 'react';
import './AmazingNumberButton.css'

const AmazingNumberButton = ({symbol}) => {
	return (
		<div className='button-wrapper' id='buttonActive'>
			{symbol}
		</div>
	);
};

export default AmazingNumberButton;