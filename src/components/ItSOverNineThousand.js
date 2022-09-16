import React from 'react';
import './ItSOverNineThousand.css'


const ItSOverNineThousand = ({ IsOver9000 }) => {
	return (
		<div>
			<h5 className="over">{IsOver9000}</h5>
		</div>
	);
};

export default ItSOverNineThousand;