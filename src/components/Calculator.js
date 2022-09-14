
import { useState } from "react";
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from './GreatOperationButton';

import * as math from 'mathjs';

const Calculator = () => {
	const [text, setText] = useState('');
	const [result, setResult] = useState('');

	const addTotext = (val) => {
		setText((text) => [...text, val + ""]);
	};

	const resetInput = () => {
		setText('')
		setResult('')
	};

	const calculateResult = () => {
		const input = text.join("");

		setResult(math.evaluate(input));
	}


	return (
		<div className="Calulator">
			<div className="calc-wrapper">
				<BeautifulScreen text={text} result={result} />
				<div className="bgNumber">
					<div className="line"></div>
					<div className="row">
						<AmazingNumberButton symbol="7" handleClick={addTotext} />
						<AmazingNumberButton symbol="8" handleClick={addTotext} />
						<AmazingNumberButton symbol="9" handleClick={addTotext} />
						<GreatOperationButton operationbtn="/" handleClick={addTotext} />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="4" handleClick={addTotext} />
						<AmazingNumberButton symbol="5" handleClick={addTotext} />
						<AmazingNumberButton symbol="6" handleClick={addTotext} />
						<GreatOperationButton operationbtn="*" handleClick={addTotext} />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="1" handleClick={addTotext} />
						<AmazingNumberButton symbol="2" handleClick={addTotext} />
						<AmazingNumberButton symbol="3" handleClick={addTotext} />
						<GreatOperationButton operationbtn="-" handleClick={addTotext} />
					</div>
					<div className="row">
						<AmazingNumberButton symbol="0" handleClick={addTotext} />
						<AmazingNumberButton symbol="." handleClick={addTotext} />
						<AmazingNumberButton symbol="AC" handleClick={resetInput} />
						<GreatOperationButton operationbtn="+" handleClick={addTotext} />
					</div>
					<MagnificientEqualButton equal="=" handleClick={calculateResult} />
				</div>
			</div>
		</div>
	);
};

export default Calculator;