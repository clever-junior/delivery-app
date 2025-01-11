'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState } from 'react';

export interface ILoginContext {
  email: string
  setEmail: Dispatch<SetStateAction<string>> 
  password: string 
  setPassword: Dispatch<SetStateAction<string>> 
  name: string
  setName: Dispatch<SetStateAction<string>> 
}

export const LoginContext = createContext({} as ILoginContext); 

export function LoginProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const context = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
  }), [email, password, name]);

  return (
    <LoginContext.Provider value={{ ...context }}>
      { children }
    </LoginContext.Provider>
  );
}
