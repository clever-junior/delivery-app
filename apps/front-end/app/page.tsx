'use client'

import Link from 'next/link';
import { useContext, useState } from 'react';
import userLogin from '../service/requests';
import { Button } from './components/Button';
import { GenericInput } from './components/GenericInput';
import { LoginContext } from './context/LoginContext';

export default function Login() {
  const { email, setEmail, password, setPassword } = useContext(LoginContext);
  const emailPattern = /\S+@\S+\.\S+/;
  const NUM = 6;
  const [isDisabled] = useState(false);

  const disabledBtn = () => !(emailPattern.test(email) && password.length >= NUM);

  const handleButton = async (e: Event) => {
    e.preventDefault();
    const result = await userLogin({ email, password });

    console.log(result);
  };

  return (
    <main className='flex items-center h-screen'>
      <div className='m-auto h-96 bg-gray-300 p-12 rounded-xl flex flex-col justify-evenly'>
        <h1 className='font-bold text-2xl text-center text-black'>Login</h1>
        <form className=''>
          <div className=''>
            <div className='my-5'>
              <GenericInput
                testId="common_login__input-email"
                type="email"
                input={email}
                name="Login"
                placeholder="example@example.com"
                setter={setEmail}
                fieldName=''
                selector=''
              />
            </div>
            <div className='my-5'>
              <GenericInput
                testId="common_login__input-password"
                type="password"
                input={password}
                name="Senha"
                placeholder="Min. 6 digítos"
                setter={setPassword}
                fieldName=''
                selector=''
              />
            </div>
          </div>
          <div className='my-5'>
            <div className='text-center my-5 bg-gray-600 rounded-lg hover:bg-blue-400 hover:cursor-pointer'>
              <Button
                dataTestId="common_login__button-login"
                type="submit"
                name="login"
                onClick={() => handleButton}
                disabled={disabledBtn()}
                text="Login"
              />
            </div>
            <div className=''>
              <Link href="/register" className='flex justify-center text-center w-full text-blue-500 hover:text-blue-800 underline'>
                <Button
                  dataTestId="common_login__button-register"
                  type="submit"
                  name="register"
                  disabled={isDisabled}
                  text="Ainda não tenho conta"
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
