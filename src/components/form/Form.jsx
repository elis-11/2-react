/* eslint-disable react-hooks/exhaustive-deps */
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

	const [ password1, setPassword1 ] = useState([]);
	const [ password1IsValid, setPassword1IsValid ] = useState(false);
	const [ passwordsInputType, setPasswordsInputType ] = useState('psaaword');

	const [ password2, setPassword2 ] = useState([]);
	const [ password2IsValid, setPassword2IsValid ] = useState(false);

	const [ payload, setPayload ] = useState({});
	const [ formIsValid, setFormIsValid ] = useState(false);

	const clearPayload = () => {
		if (Object.keys(payload).length !== 0) {
			setPayload((prev) => ({}));
		}
	};

	useEffect(
		() => {
			clearPayload();
		},
		[ name, email, phone, password1, password2 ]
	);

	useEffect(
		() => {
			setFormIsValid(
				nameIsValid &&
					emailIsValid &&
					phoneIsValid &&
					password1IsValid &&
					password2IsValid &&
					password1 === password2
			);
		},
		[ nameIsValid, emailIsValid, phoneIsValid, password1IsValid, password2IsValid ]
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

	const handlePassword1 = (e) => {
		let _password1 = e.target.value;
		_password1.length >= 5 ? setPassword1IsValid(true) : setPassword1IsValid(false);
		setPassword1(_password1);
	};

	const handlePassword2 = (e) => {
		let _password2 = e.target.value;
		_password2.length >= 5 ? setPassword2IsValid(true) : setPassword2IsValid(false);
		setPassword2(_password2);
	};

	const handleShowPasswordButton = (e) => {
		setPasswordsInputType(passwordsInputType === 'password' ? 'text' : 'password');
	};

	const handleButton = (e) => {
		e.preventDefault();
		setPayload((prev) => ({
			...prev,
			name,
			email,
			password1,
			password2,
			phone
		}));

		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				phone,
				password1,
				password2
			})
		}(async () => {
			await fetch(`http://localhost:3033/create`, requestOptions);
		})();
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
					<div className={`note ${nameIsValid ? 'valid' : 'invalid'}`}>required: 2 - 20 characters</div>

					{/* EMAIL */}
					<div className={`row + ${emailIsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="text">Email</label>
						<input type="email" id="name" value={email} onChange={handleEmail} />
					</div>
					<div className={`note ${emailIsValid ? 'valid' : 'invalid'}`}>
						<p>user@mail.com</p>
					</div>

					{/* PHONE */}
					<div className={`row + ${phoneIsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="phone">Phone</label>
						<input type="text" id="phone" value={phone} onChange={handlePhone} />
					</div>
					<div className={`note ${phoneIsValid ? 'valid' : 'invalid'}`}>e.g. 5553332222</div>

					{/* PASSWORD-1 */}
					<div className={`row ${password1IsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="password">Password</label>
						<input type={passwordsInputType} id="name" value={password1} onChange={handlePassword1} />
					</div>
					<div className={`note ${password1IsValid ? 'valid' : 'invalid'}`}>
						<p>4 characters</p>
					</div>

					{/* PASSWORD-BUTTON */}
					<div className="buttonRow">
						<button type="button" onClick={handleShowPasswordButton}>
							Show Password
						</button>
					</div>

					{/* PASSWORD-2 */}
					<div className={`row ${password2IsValid ? 'valid' : 'invalid'}`}>
						<label htmlFor="password">Password</label>
						<input type={passwordsInputType} id="name" value={password2} onChange={handlePassword2} />
					</div>
					<div className={`note ${password2IsValid ? 'valid' : 'invalid'}`}>
						<p>repeat your password</p>
					</div>

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
