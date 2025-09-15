import React from 'react';

// Device-themed Logo
const Logo = ({ testId }) => (
  <div 
    className="relative w-20 h-20 mx-auto mb-8"
    data-testid={testId}
  >
    <div className="absolute inset-0 bg-slate-800 rounded-xl rotate-3"></div>
    <div className="relative bg-slate-900 rounded-xl p-4 shadow-xl">
      <div className="text-white text-sm font-mono">
        <div className="flex items-center gap-1 mb-1">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        </div>
        <div className="text-xs opacity-80">3/5 devices</div>
      </div>
    </div>
  </div>
);

const Hero = () => (
  <div className="hero py-16 px-4 bg-white" data-testid="hero">
    <div className="max-w-3xl mx-auto text-center">
      <Logo testId="hero-logo" />
      
      <h1 
        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6" 
        data-testid="hero-title"
      >
        Device Limit Control
      </h1>

      <p 
        className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto" 
        data-testid="hero-lead"
      >
        Smart device access management. Built with <strong>FastAPI</strong>, <strong>Auth0</strong>, 
        and <a 
          href="https://nextjs.org" 
          className="text-green-600 hover:text-green-700 font-medium underline decoration-2 underline-offset-2"
        >
          Next.js
        </a>.
      </p>

      {/* Device visualization */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
          </div>
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v11a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 000-2H9z"/>
            </svg>
          </div>
          <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </div>
        </div>
        
        <div className="text-slate-400 font-mono text-sm">3/5</div>
        
        <div className="flex -space-x-2">
          <div className="w-10 h-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          </div>
          <div className="w-10 h-10 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Status card */}
      <div className="bg-slate-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
        <div className="text-sm text-slate-500 mb-2">Current Status</div>
        <div className="text-2xl font-bold text-slate-900 mb-1">3 of 5 devices active</div>
        <div className="text-sm text-green-600">✓ 2 slots available</div>
      </div>

      <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Get Started
      </button>
    </div>
  </div>
);

export default Hero;