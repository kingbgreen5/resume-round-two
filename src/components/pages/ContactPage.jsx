import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'name') {
        setName(inputValue);
      }
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }
    alert(`Thank you ${name}, I will get back to you as soon as possible`);
    setName('');
    setEmail('');
  };


const [emailError, setEmailError] = useState('');
const [nameError, setNameError] = useState('');

  const emailBlur=(e) => {
    const { name, value } = e.target;
    if (name === 'email' && !value.trim()) {
      console.log("blur")
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  }

  const nameBlur=(e) => {
    const { name, value } = e.target;
    if (name === 'name' && !value.trim()) {
      console.log("Name blur")
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  }

  return (
    <div className="container text-center">
      <br />
      <br />
      <h4>  I look forward to hearing from you {name}</h4>

      <br />
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
          onBlur={emailBlur}
        />
        <br />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          onBlur={nameBlur}
        />
        <br />
     
    <br /> 
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>{emailError}</div>
      <div>{nameError}</div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}




export default Form;

