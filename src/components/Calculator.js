import React from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from './GreatOperationButton';

const Calculator = () => {
	return (
		<div className='Calulator'>
			<div className="calc-wrapper">
				<BeautifulScreen />
				<div className="bgNumber">
					<div className="line"></div>
					<div className="row">
						<AmazingNumberButton symbol="7" />
						<AmazingNumberButton symbol="8" />
						<AmazingNumberButton symbol="9" />
						<GreatOperationButton operationbtn="/" />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="4" />
						<AmazingNumberButton symbol="5" />
						<AmazingNumberButton symbol="6" />
						<GreatOperationButton operationbtn="*" />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="1" />
						<AmazingNumberButton symbol="2" />
						<AmazingNumberButton symbol="3" />
						<GreatOperationButton operationbtn="-" />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="0" />
						<AmazingNumberButton symbol="," />
						<AmazingNumberButton symbol="AC" />
						<GreatOperationButton operationbtn="+" />
					</div>
					<MagnificientEqualButton equal="=" />
				</div>
			</div>
		</div>
	);
};

export default Calculator;