'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser, getAccessToken } from '@auth0/nextjs-auth0';
import { useRegistration } from './userRegisterContext'; // your registration context

// Create SessionContext
const SessionContext = createContext();

export const SessionProvider = ({ children, pauseCheck = false }) => {
  const { user } = useUser();
  const { registered } = useRegistration(); // ✅ wait for registration
  const [sessionValid, setSessionValid] = useState(true);
  const [checking, setChecking] = useState(true);
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  const getDeviceId = () => {
    if (typeof window === 'undefined') return null;
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
  };

  useEffect(() => {
    if (!user || !registered || hasLoggedOut || pauseCheck) return; // ⬅️ wait for registration

    const DEVICE_ID = getDeviceId();

    const verifySession = async () => {
      try {
        const token = await getAccessToken({
          audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE,
        });

        const res = await fetch(
          `http://localhost:8000/api/check-session?device_id=${DEVICE_ID}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 401) {
          setSessionValid(false);
          setHasLoggedOut(true);
          window.location.href = '/auth/logout';
          return;
        }

        if (!res.ok) throw new Error('Session check failed');

        setSessionValid(true);
      } catch (err) {
        console.error(err);
        setSessionValid(false);
        setHasLoggedOut(true);
        window.location.href = '/auth/logout';
      } finally {
        setChecking(false);
      }
    };

    verifySession();
  }, [user, registered, hasLoggedOut, pauseCheck]);

  return (
    <SessionContext.Provider value={{ sessionValid, checking, user }}>
      {children}
    </SessionContext.Provider>
  );
};

// Hook to consume session context
export const useSession = () => useContext(SessionContext);
