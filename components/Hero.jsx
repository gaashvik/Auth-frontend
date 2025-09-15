import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      N Device Limit
    </h1>

    <p className="lead" data-testid="hero-lead">
      Implemented using FastAPI, Auth0 & Next.js{' '}
      <a href="https://nextjs.org">Next.js</a>
    </p>
  </div>
);

export default Hero;
