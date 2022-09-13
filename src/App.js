// import logo from './logo.svg';
import './App.css';
import AmazingNumberButton from './components/AmazingNumberButton';
import BeautifulScreen from './components/BeautifulScreen';
import MagnificientEqualButton from './components/MagnificientEqualButton';
import GreatOperationButton from './components/GreatOperationButton';


const App = () => {
  return (
		<div className="App">
			<h1>Calculator 9000</h1>
			<div className="calc-wrapper">
				<BeautifulScreen />
				<div className="bgNumber">
					<div className='line'></div>
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
						<GreatOperationButton operationbtn="-"/>
					</div>
					<div className="row">
						<AmazingNumberButton symbol="0" />
						<AmazingNumberButton symbol="," />
						<AmazingNumberButton symbol="AC" />
						<GreatOperationButton operationbtn="+"/>
					</div>
					<MagnificientEqualButton equal="=" />
				</div>
			</div>
		</div>
	);
}

export default App;
