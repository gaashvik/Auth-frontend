'use client';

import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const PageLink = ({ href, children, testId, className }) => (
  <a href={href} data-testid={testId} className={className}>{children}</a>
);

const AnchorLink = ({ href, children, testId, className }) => (
  <a href={href} data-testid={testId} className={className}>{children}</a>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50" data-testid="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <div className="text-white text-xs font-bold">N</div>
              </div>
              <span className="text-xl font-bold text-slate-900">Device Limit</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <PageLink 
                href="/" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                testId="navbar-home"
              >
                Home
              </PageLink>
              
              {user && (<PageLink 
                href="/ssr" 
                className="text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors" 
                testId="navbar-info"
              >
                How it Works
              </PageLink>)}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {!isLoading && !user && (
                <AnchorLink
                  href="/auth/login"
                  className="bg-slate-900 hover:bg-slate-800 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  testId="navbar-login-desktop"
                >
                  Sign In
                </AnchorLink>
              )}
              
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-3 bg-slate-50 hover:bg-slate-100 rounded-lg px-3 py-2 transition-colors"
                    data-testid="navbar-menu-desktop"
                  >
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                      data-testid="navbar-picture-desktop"
                    />
                    <span className="text-sm font-medium text-slate-700">{user.name}</span>
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1">
                      <div className="px-4 py-2 text-xs text-slate-500 border-b border-slate-100" data-testid="navbar-user-desktop">
                        {user.email}
                      </div>
                      <PageLink
                        href="/profile"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        testId="navbar-profile-desktop"
                      >
                        Profile
                      </PageLink>
                      <AnchorLink
                        href="/auth/logout"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                        testId="navbar-logout-desktop"
                      >
                        Sign Out
                      </AnchorLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-100 hover:bg-slate-200 p-2 rounded-md text-slate-700"
              data-testid="navbar-toggle"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white" data-testid="navbar-items">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <PageLink
                href="/"
                className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md text-sm font-medium"
                testId="navbar-home-mobile"
              >
                Home
              </PageLink>
              
              <PageLink
                href="/info"
                className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md text-sm font-medium"
                testId="navbar-info-mobile"
              >
                How it Works
              </PageLink>
              
              {user && (
                <PageLink
                  href="/dashboard"
                  className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md text-sm font-medium"
                  testId="navbar-dashboard-mobile"
                >
                  Dashboard
                </PageLink>
              )}
            </div>
            
            <div className="pt-4 pb-3 border-t border-slate-200">
              {!isLoading && !user && (
                <div className="px-2">
                  <AnchorLink
                    href="/auth/login"
                    className="block w-full bg-slate-900 hover:bg-slate-800 text-black px-4 py-2 rounded-lg text-sm font-medium text-center transition-colors"
                    testId="navbar-login-mobile"
                  >
                    Sign In
                  </AnchorLink>
                </div>
              )}
              
              {user && (
                <div className="px-2 space-y-2" data-testid="navbar-menu-mobile">
                  <div className="flex items-center px-3 py-2">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="w-10 h-10 rounded-full mr-3"
                      data-testid="navbar-picture-mobile"
                    />
                    <div>
                      <div className="text-sm font-medium text-slate-900" data-testid="navbar-user-mobile">
                        {user.name}
                      </div>
                      <div className="text-xs text-slate-500">{user.email}</div>
                    </div>
                  </div>
                  
                  <PageLink
                    href="/profile"
                    className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md text-sm font-medium"
                    testId="navbar-profile-mobile"
                  >
                    Profile
                  </PageLink>
                  
                  <AnchorLink
                    href="/auth/logout"
                    className="block px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md text-sm font-medium"
                    testId="navbar-logout-mobile"
                  >
                    Sign Out
                  </AnchorLink>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;