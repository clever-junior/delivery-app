import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import GenericInput from '../components/Input';
import LoginContext from '../context/LoginContext';
import userLogin from '../service/requests';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;
  const [isDisabled] = useState(false);

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  const handleButton = async (e) => {
    e.preventDefault();
    const result = await userLogin({ email, password });

    console.log(result);
  };

  return (
    <form>
      <GenericInput
        testId="common_login__input-email"
        type="email"
        input={ email }
        name="Login"
        placeholder="example@example.com"
        setter={ setEmail }
      />

      <GenericInput
        testId="common_login__input-password"
        type="password"
        input={ password }
        name="Senha"
        placeholder="Min. 6 digítos"
        setter={ setPassword }
      />

      <Button
        dataTestId="common_login__button-login"
        type="submit"
        name="login"
        onClick={ handleButton }
        disabled={ disabledBtn() }
        text="Login"
      />
      <Link to="/register">
        <Button
          dataTestId="common_login__button-register"
          type="submit"
          name="register"
          disabled={ isDisabled }
          text="Ainda não tenho conta"
        />
      </Link>
    </form>
  );
}

export default Login;
