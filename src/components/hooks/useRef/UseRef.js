import { useRef, useState } from 'react';
import './UseRef.scss';

/**
 * useState vs useRef
 * 
 * - useState we use when: we wanna trigger some DOM change
 * - useRef we use when: 
 *    - form without on-type validation => when we just need data on SUBMIT
 *    - directly access DOM elements and manipulate
 *    - global instances => just initialize once things
 */

function UseRef() {

  console.log("Re-rendering...")

  // Storing data in state
  // const [ email, setEmail ] = useState('');
  // const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('')

  // Alternative: Store data in refs (=> changes will not trigger DOM updates)
  const emailRef = useRef()
  const pwRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault();

    console.log( emailRef.current.value )
    console.log( pwRef.current.value )

    const email = emailRef.current.value
    const password = pwRef.current.value

    if( email.length < 5) {
      setError("Sorry, email must be at least 5 chars long")
    } 
    else if( password.length < 4) {
      setError("Sorry, pw must be at least 4 chars")
    }
    else {
      console.log('Data submitted: ', email, password );
      setError("")
    }
  };

  // state update handlers
  // const handleEmailChange = (e) => setEmail(e.target.value)
  // const handlePasswordChange = (e) => setPassword(e.target.value)

  return (
    <div className="UseRef">
      <header className="header">
        <form>
          <h2>Is it you?</h2>
          <div>
            <input type="email" placeholder="Email..." ref={ emailRef } />
          </div>
          <div>
            <input type="password" placeholder="Password..." ref={ pwRef }  />
          </div>
          <div>
            <button onClick={onSubmit}>Login</button>
          </div>
          <div className="errors">
            { error }
          </div>
        </form>
      </header>
    </div>
  );
}

export default UseRef;