import { useEffect } from 'react';
import './App.css';
import { Counter } from './components/Counter';

export type infoReadyValueType = {
	status: 'ok' | 'ready' | 'error'
	value: string
}

function App() {
	useEffect(() => {
		if (!localStorage.getItem('maxValue')) {
			localStorage.setItem('maxValue', "5")
		}
		if (!localStorage.getItem('startValue')) {
			localStorage.setItem('startValue', "0")
		}
	}, [])

	return (
		<div className="App">
			<Counter />
		</div>
	);
}

export default App;
