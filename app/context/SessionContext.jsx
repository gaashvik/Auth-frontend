'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useUser, getAccessToken } from '@auth0/nextjs-auth0';

const SessionContext = createContext();

export const SessionProvider = ({ children, pauseCheck = false }) => {
  const { user } = useUser();
  const [sessionValid, setSessionValid] = useState(true);
  const [checking, setChecking] = useState(true);
  const [hasLoggedOut, setHasLoggedOut] = useState(false);

  function getDeviceId() {
    if (typeof window === 'undefined') return null;
    let deviceId = localStorage.getItem('device_id');
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem('device_id', deviceId);
    }
    return deviceId;
  }

  useEffect(() => {
    if (!user || hasLoggedOut || pauseCheck) return; // ⬅️ skip check while modal open

    const DEVICE_ID = getDeviceId();
    const verifySession = async () => {
      try {
        const token = await getAccessToken({ audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE });
        const res = await fetch(`http://localhost:8000/api/check-session?device_id=${DEVICE_ID}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          setSessionValid(false);
          setHasLoggedOut(true);
          window.location.href = '/auth/logout'; // correct path
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
  }, [user, hasLoggedOut, pauseCheck]);

  return (
    <SessionContext.Provider value={{ sessionValid, checking, user }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
