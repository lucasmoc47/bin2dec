import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import './App.css';

import CopyIcon from './assets/copy_icon.svg'

function App() {
	const [bin, setBin] = useState('')
	const [dec, setDec] = useState(0)
	const [showAlert, setAlert] = useState('')

	function handleChange(event) {
		const { value } = event.target
		const lastDigit = value[value.length - 1]
		let isBin = true

		if (lastDigit !== '0' && lastDigit !== '1')
			isBin = false

		if (isBin || value.length === 0) {
			setBin(value)
			value.length ? setDec(parseInt(value, 2)) : setDec(0)
		}
	}

	function handleClick(event) {
		setAlert('showAlert')
		setTimeout(() => { setAlert('') }, 1000)
	}

	return (
		<div className="wrapper">
			<h1 className="header">Binary to Decimal converter</h1>
			<div className="conversor">
				<div className="inputGroup">
					<label htmlFor="binary">Enter a binary number: </label>
					<input
						type="text"
						id="binary"
						onChange={handleChange}
						value={bin}
						placeholder="Enter a binary number"
					/>
				</div>
				<div className="result">
					<label htmlFor="result">Decimal: </label>
					<input type="number" id="result" disabled={true} value={dec} />
				</div>
				<CopyToClipboard onCopy={handleClick} text={dec}>
					<div className="button">
						<p>Copy</p>
						<img src={CopyIcon} alt="copy" />
						<div className={"copyAlert " + showAlert}><span>Copied!</span></div>
					</div>
				</CopyToClipboard>
			</div>
		</div>
	);
}

export default App;
