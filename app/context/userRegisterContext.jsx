// app/context/RegistrationContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const [registered, setRegistered] = useState(false);

  return (
    <RegistrationContext.Provider value={{ registered, setRegistered }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
