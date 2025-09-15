'use client';
import useRegisterSession from '../app/hook/userRegistration';

/**
 * This component simply calls the hook and renders its modal.
 * Drop it anywhere inside <Auth0Provider> so it can access the user.
 */
export default function SessionRegisterer() {
  const Modal = useRegisterSession();
  return <>{Modal}</>;
}
