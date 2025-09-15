import React from 'react';
import { auth0 } from '../../lib/auth0';

export default async function SSRPage() {
  const { user } = await auth0.getSession();
  return (
    <InfoPage />
  );
};
const InfoPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            How Device Limiting Works
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Simple, effective device access control for your applications
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold text-slate-900 mb-2">Set Limit</h3>
              <p className="text-sm text-slate-600">Configure how many devices can access your service</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold text-slate-900 mb-2">Track Sessions</h3>
              <p className="text-sm text-slate-600">Monitor active devices using secure tokens</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold text-slate-900 mb-2">Enforce Rules</h3>
              <p className="text-sm text-slate-600">Block or remove sessions when limit is reached</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold text-slate-900 mb-2">User Control</h3>
              <p className="text-sm text-slate-600">Users can view and manage their active devices</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Live Device Status</h2>
          <div className="bg-slate-50 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-slate-900">Active Devices</h3>
                <p className="text-sm text-slate-600">3 of 5 devices connected</p>
              </div>
              <div className="text-sm text-green-600 font-medium">2 slots available</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">MacBook Pro</div>
                    <div className="text-xs text-slate-500">Chrome • 2 minutes ago</div>
                  </div>
                </div>
                <button className="text-xs text-slate-500 hover:text-red-500">Remove</button>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">iPhone 12</div>
                    <div className="text-xs text-slate-500">Safari • 1 hour ago</div>
                  </div>
                </div>
                <button className="text-xs text-slate-500 hover:text-red-500">Remove</button>
              </div>

              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Windows PC</div>
                    <div className="text-xs text-slate-500">Edge • 3 hours ago</div>
                  </div>
                </div>
                <button className="text-xs text-slate-500 hover:text-red-500">Remove</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Built With Modern Tech</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">API</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">FastAPI</h4>
              <p className="text-sm text-slate-600">High-performance Python backend for device session management</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">AUTH</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Auth0</h4>
              <p className="text-sm text-slate-600">Enterprise authentication with secure token management</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">UI</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Next.js</h4>
              <p className="text-sm text-slate-600">Modern React framework with server-side rendering</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Use Device Limits?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h4 className="font-semibold text-green-900 mb-4">For Your Business</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Prevent account sharing abuse</li>
                <li>• Better resource management</li>
                <li>• Improved security monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-4">For Your Users</h4>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Clear device visibility</li>
                <li>• Better app performance</li>
                <li>• Enhanced account security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-slate-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-slate-300 mb-6">
            Implement device limiting in minutes, not hours
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
              Try Demo
            </button>
            <button className="px-6 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};