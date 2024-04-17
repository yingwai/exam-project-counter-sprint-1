import { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Setting } from './components/Setting';

export type infoReadyValueType = {
	status: 'ok' | 'ready' | 'error'
	value: string
}

function App() {
	if (!localStorage.getItem('maxValue')) {
		localStorage.setItem('maxValue', "5")
	}
	if (!localStorage.getItem('startValue')) {
		localStorage.setItem('startValue', "0")
	}

	const [maxValue, setMaxValue] = useState(String(localStorage.getItem('maxValue')));
	const [startValue, setStartValue] = useState(String(localStorage.getItem('startValue')));
	const [infoReadyValue, setInfoReadyValue] = useState<infoReadyValueType>({ status: 'ok', value: "" })

	function fSetMaxValue(value: string) {
		setMaxValue(value)
	}

	function fSetStartValue(value: string) {
		setStartValue(value)
	}

	function fSaveNewValue() {		
		localStorage.setItem('maxValue', maxValue)
		localStorage.setItem('startValue', startValue)

		setInfoReadyValue({ status: 'ok', value: "" })
	}

	useEffect(() => {
		if (maxValue === localStorage.getItem('maxValue') && startValue === localStorage.getItem('startValue')) {
			setInfoReadyValue({ status: 'ok', value: "" })
			return
		}

		if (Number(maxValue) <= Number(startValue)) {
			setInfoReadyValue({ status: 'error', value: "Incorrect value!" })
			return
		}

		if (Number(maxValue) < 0 || Number(startValue) < 0) {
			setInfoReadyValue({ status: 'error', value: "Incorrect value!" })
			return
		}

		setInfoReadyValue({ status: 'ready', value: "enter values and press 'set'" })
	}, [maxValue, startValue])

	return (
		<div className="App">
			<Setting max={maxValue} start={startValue} setMaxValue={fSetMaxValue} setStartValue={fSetStartValue} infoReadyValue={infoReadyValue} saveNewValue={fSaveNewValue} />
			<Counter max={maxValue} start={startValue} infoReadyValue={infoReadyValue} />
		</div>
	);
}

export default App;
