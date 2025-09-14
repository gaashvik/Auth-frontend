import { NextResponse } from 'next/server';
import { auth0 } from '../../../lib/auth0';

export const GET = async (request) => {
  try {
    const session = await auth0.getSession();
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const {token:accessToken}  = await auth0.getAccessToken();
    console.log(accessToken)
    const apiPort = process.env.API_PORT || 3001;
    // console.log(accessToken)
    const response = await fetch(`http://localhost:${apiPort}/api/shows`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
  const text = await response.text(); // get raw HTML or error message
  console.error('API Error Response:', text);
  return NextResponse.json(
    { error: `API request failed with status ${response.status}` },
    { status: response.status }
  );
}

    const shows = await response.json();
    return NextResponse.json(shows);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: error.status || 500 }
    );
  }
};
