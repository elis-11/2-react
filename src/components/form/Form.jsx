/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './Form.scss';

export const Form = () => {
	const [ name, setName ] = useState('');
	const [ nameIsValid, setNameIsValid ] = useState(false);

	const [ email, setEmail ] = useState('');
	const [ emailIsValid, setEmailIsValid ] = useState(false);

	const [ phone, setPhone ] = useState('');
	const [ phoneIsValid, setPhoneIsValid ] = useState(false);

	const [ payload, setPayload ] = useState({});
	const [ formIsValid, setFormIsValid ] = useState(false);

	useEffect(
		() => {
			setFormIsValid(nameIsValid && emailIsValid && phoneIsValid);
		},
		[ nameIsValid, emailIsValid, phoneIsValid ]
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

	const handleEmail = (e) => {
		let _email = e.target.value;
		_email && /[a-zA-z0-9_.-]{2,}@[a-z]{2,}\.[a-z]{2,}/.test(_email)
			? setEmailIsValid(true)
			: setEmailIsValid(false);
		setEmail(_email);
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
			phone
		}));
	};

	return (
		<div className="Form">
			<form>
				<fieldset>
					<legend>sing up</legend>

					{/* NAME */}
					<div className={`row + ${nameIsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" value={name} onChange={handleName} />
					</div>
					<div className={`note ${nameIsValid ? 'valid' : 'invalid'}`}>required, 2 - 20 characters</div>

					{/* EMAIL */}
					<div className={`row + ${emailIsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="text">Email</label>
						<input type="email" id="name" value={email} onChange={handleEmail} />
					</div>
					<div className={`note ${emailIsValid ? 'valid' : 'invalid'}`}>
						<p>User@mail.com</p>
					</div>

					{/* PHONE */}
					<div className={`row + ${phoneIsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="phone">Phone</label>
						<input type="text" id="phone" value={phone} onChange={handlePhone} />
					</div>
					<div className={`note ${phoneIsValid ? 'valid' : 'invalid'}`}>e.g. 5553332222</div>

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
