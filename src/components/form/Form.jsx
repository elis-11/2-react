/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
	const [ name, setName ] = useState('');
	const [ nameIsValid, setNameIsValid ] = useState(false);

	const [ pin, setPin ] = useState('');
	const [ pinIsValid, setPinIsValid ] = useState(false);

	const [ phone, setPhone ] = useState('');
	const [ phoneIsValid, setPhoneIsValid ] = useState(false);

	const [ payload, setPayload ] = useState({});
	const [ formIsValid, setFormIsValid ] = useState(false);

	useEffect(
		() => {
			setFormIsValid(nameIsValid && pinIsValid && phoneIsValid);
		},
		[ nameIsValid, pinIsValid, phoneIsValid ]
	);

	const handleName = (e) => {
		let _name = e.target.value;
		if (_name !== '' && _name.length > 2 && _name.length < 20) {
			setNameIsValid(true);
		} else {
			setNameIsValid(false);
		}
		setName(_name);
	};

	const handlePin = (e) => {
		let _pin = e.target.value;
		if (_pin !== '' && _pin.length === 4) {
			setPinIsValid(true);
		} else {
			setPinIsValid(false);
		}
		setPin(_pin)
	};

	const handlePhone = (e) => {
		let _phone = e.target.value;
		if (_phone !== '' && /^\d\d\d\d\d\d\d\d\d\d$/.test(_phone)) {
			setPhoneIsValid(true);
		} else {
			setPhoneIsValid(false);
		}
		setPhone(_phone);
	};

	const clearPayload = () => {
		setPayload((prev) => ({}));
	};
	// clearPayload();

	const handleButton = (e) => {
		e.preventDefault();
		setPayload((prev) => ({
			...prev,
			name,
			pin,
			phone
		}));
	};

	return (
		<div className="Form">
			<form>
				<fieldset>
					<legend>Order Form</legend>

					{/* NAME */}
					<div className={'row ' + (nameIsValid ? 'valid' : 'invalid')}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" value={name} onChange={handleName} />
					</div>
					<div className={'note ' + (nameIsValid ? 'valid' : 'invalid')}>
						required, minimum 5 and maximum 10 characters
					</div>

					{/* PIN */}
					<div className={'row ' + (pinIsValid ? 'valid' : 'invalid')}>
						<label htmlFor="pin">Pin</label>
						<input type="text" id="pin" value={pin} onChange={handlePin} />
					</div>
					<div className={'note ' + (pinIsValid ? 'valid' : 'invalid')}>required, 4 characters</div>

					{/* PHONE */}
					<div className={'row ' + (phoneIsValid ? 'valid' : 'invalid')}>
						<label htmlFor="phone">Phone</label>
						<input type="text" id="phone" value={phone} onChange={handlePhone} />
					</div>
					<div className={'note ' + (phoneIsValid ? 'valid' : 'invalid')}>e.g. 5553332222</div>

					{/* BUTTON */}
					<div className="buttonRow">
						<button disabled={!formIsValid} onClick={handleButton}>
							Register
						</button>
					</div>
				</fieldset>
			</form>
			{Object.keys(payload).length !== 0 && <pre>payload: {JSON.stringify(payload, null, 2)}</pre>}
		</div>
	);
};
export default Form;
