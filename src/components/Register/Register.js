import React, { useState } from 'react';
import { BackgroundBox, Box1, Box2, Form, Input, Button, Title, Text } from '../../styles/RegisterStyle';
import AuthService from '../../services/authService';
const signupInitialState = { name: '', email: '', password: '' };
const loginInitialState = { email: '', password: '' };

const Register = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [signupState, setSignupState] = useState(signupInitialState);
  const [regErrorMsg, setRegErrorMsg] = useState('');

  const [loginState, setLoginState] = useState(loginInitialState);
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  const service = new AuthService();

  //Sign Up Part
  const handleSignUpInputChange = (event) => {
    let { value, name } = event.target;
    setSignupState({ ...signupState, [name]: value });
  };

  const handleSigUpFormSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = signupState;

    service
      .signup(name, email, password)
      .then((response) => {
        setSignupState(signupInitialState);
        console.log('response', response);
      })
      .catch((error) => {
        const { message } = error.response.data;
        setRegErrorMsg(message);
        console.log(error);
        console.log('Should get an error');
      });
  };

  //LogIn Part
  const handleLogInInputChange = (event) => {
    let { value, name } = event.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const handleLogInFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = loginState;

    service
      .login(email, password)
      .then((response) => {
        setLoginState(loginInitialState);
        console.log('response', response);
      })
      .catch((error) => {
        const { message } = error.response.data;
        setLoginErrorMsg(message);
        console.log(error);
      });
  };

  return (
    <>
      {' '}
      <BackgroundBox clicked={click}>
        <Form className='signin' onSubmit={handleLogInFormSubmit}>
          <Title>Sign In</Title>
          <Input type='email' name='email' placeholder='Email' value={loginState.email} onChange={handleLogInInputChange} />
          <Input type='password' name='password' placeholder='Password' value={loginState.password} onChange={handleLogInInputChange} />
          <Button>Sign In</Button>
        </Form>

        <Form className='signup' onSubmit={handleSigUpFormSubmit}>
          <Title>Sign Up</Title>
          <Input type='text' name='name' id='nameId' placeholder='Name' value={signupState.name} onChange={handleSignUpInputChange} />

          <Input type='email' name='email' id='emailId' placeholder='Email' value={signupState.email} onChange={handleSignUpInputChange} />
          <Input
            type='password'
            name='password'
            id='passwordId'
            placeholder='Password'
            value={signupState.password}
            onChange={handleSignUpInputChange}
          />
          <Button>Sign Up</Button>
        </Form>

        <Text className='text1' clicked={click}>
          <h1>Welcome!</h1>
          Don't have an account?
          <br />
          <Button onClick={handleClick}>Sign Up</Button>
        </Text>

        <Text className='text2' clicked={click}>
          <h1>Hi There!</h1>
          Already have an account?
          <br />
          <Button onClick={handleClick}>Sign In</Button>
        </Text>

        <Box1 clicked={click} />
        <Box2 clicked={click} />
      </BackgroundBox>
    </>
  );
};

export default Register;
