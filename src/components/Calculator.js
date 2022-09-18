import { useState } from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from './GreatOperationButton';
import ItSOverNineThousand from './ItSOverNineThousand';
import Historical from './Historical';
import HistoricalButton from './HistoricalButton';
import SaveButton from './SaveButton';

import * as math from 'mathjs';

const Calculator = () => {
	const [text, setText] = useState('');
	const [result, setResult] = useState('');

	const addTotext = (val) => {
		setText((text) => [...text, val + '']);
	};

	const resetInput = () => {
		setText('');
		setResult('');
	};

	const calculateResult = () => {
		const input = text.join('');

		setResult(math.evaluate(input));
		setText('');

		// window.addEventListener('error', (e) => {
		// 	alert('CALCUL ERROR : ' + e.message);
		// });
	};

	function showhideHistorical() {
		var div = document.getElementById('history-error');
		if (div.style.display !== 'none') {
			div.style.display = 'none';
			div.style.opacity = '0';
			// div.style.transform = 'translateY(50px)';
		} else {
			div.style.display = 'block';
			div.style.textAlign = 'center';
			div.style.opacity = '1';
			div.style.transform = 'translateY(-50px)';
		}
	}
	

	
	return (
		<div className="Calulator">
			<div className="calc-wrapper">
				<BeautifulScreen text={text} result={result} />
				<Historical />
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
					<div className="row">
						<HistoricalButton Hbtn="H" handleClick={showhideHistorical} />
						<SaveButton saveBtn="Save" />
						{result > 9000 &&
							setResult(
								<ItSOverNineThousand IsOver9000="It's Over 9000 !!!" />
							)}
						<MagnificientEqualButton equal="=" handleClick={calculateResult} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
