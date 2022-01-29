import React, { useState } from 'react';
import BackspaceIcon from '@material-ui/icons/Backspace';
import Avatar from '@material-ui/core/Avatar';

function App(props) {
	const [ calc, setCals ] = useState('');
	const [ result, setResult ] = useState('');

	const ops = [ '/', '*', '+', '-', '.' ];

	const updateCalc = (value) => {
		if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))) {
			return;
		}
		setCals(calc + value);
		// if (!ops.includes(value)) {
		// 	setCals(calc + value);
		// }
		if (!ops.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	};

	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(
				<button onClick={() => updateCalc(i.toString())} key={i}>
					{i}
				</button>
			);
		}
		return digits;
	};

	const Calculate = () => {
		setCals(eval(calc).toString());
	};
	const Deletelast = () => {
		if (calc == '') {
			return;
		}
		const value = calc.slice(0, -1);
		setCals(value);
	};
	const Allclear = () => {
		if (calc == '') {
			return;
		}
		const value = calc.slice(0, 0);
		setCals(value);
	};

	return (
		<div className="App">
			<div className="calculator">
				<div className="display">
					{result ? <span>({result})</span> : ''}
					{calc || '0'}
				</div>
				<div className="opeartors">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={Deletelast}>DEL</button>
					<button onClick={Allclear}>CL</button>
				</div>
				<div className="digits">
					{createDigits()}
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>

					<button onClick={Calculate}>=</button>
				</div>
			</div>
		</div>
	);
}

export default App;
