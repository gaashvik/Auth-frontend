import { useRegistration } from '../context/userRegisterContext';
import { useUser, getAccessToken } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table } from 'reactstrap';

export default function SessionRegistrationModal() {
  const { registrationCompleted, setRegistrationCompleted } = useRegistration();
  const { user } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDevices, setActiveDevices] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [deviceId, setDeviceId] = useState(null);

  useEffect(() => {
    let id = localStorage.getItem('device_id');
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem('device_id', id);
    }
    setDeviceId(id);
  }, []);

  useEffect(() => {
    if (!user || !deviceId) return;

    const registerSession = async () => {
      const token = await getAccessToken({ audience: process.env.NEXT_PUBLIC_AUTH0_AUDIENCE });
      setAccessToken(token);

      const res = await fetch('http://localhost:8000/api/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          device_id: deviceId,
          device_name: navigator.userAgent,
          platform: navigator.platform,
        }),
      });

      if (res.status === 409) {
        const data = await res.json();
        setActiveDevices(data.active_devices);
        setModalOpen(true);
      } else if (!res.ok) {
        console.error('Failed to register session');
      } else {
        // Device registration completed successfully
        setRegistrationCompleted(true);
      }
    };

    registerSession();
  }, [user, deviceId]);

  const revokeDevice = async (deviceIdToRevoke) => {
    if (!accessToken) return;

    await fetch('http://localhost:8000/api/sessions/revoke', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ device_id: deviceIdToRevoke }),
    });

    const res = await fetch('http://localhost:8000/api/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({
        device_id: deviceId,
        device_name: navigator.userAgent,
        platform: navigator.platform,
      }),
    });

    if (res.ok) {
      setModalOpen(false);
      setActiveDevices([]);
      setRegistrationCompleted(true); // registration now completed after revoke
    } else if (res.status === 409) {
      const data = await res.json();
      setActiveDevices(data.active_devices);
    }
  };

  const handleCancel = () => {
    window.location.href = '/auth/logout';
  };

  if (!modalOpen) return null;

  return (
    <Modal isOpen={modalOpen} backdrop="static">
      <ModalHeader>Device Limit Reached</ModalHeader>
      <ModalBody>
        <p>You are already logged in on the maximum number of devices.</p>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Device</th>
              <th>Platform</th>
              <th>Last Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {activeDevices.map((device) => (
              <tr key={device.device_id}>
                <td>{device.device_name}</td>
                <td>{device.platform}</td>
                <td>{new Date(device.last_used).toLocaleString()}</td>
                <td>
                  <Button color="danger" size="sm" onClick={() => revokeDevice(device.device_id)}>
                    Revoke
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
