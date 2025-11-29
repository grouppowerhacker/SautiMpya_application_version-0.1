import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@components/common/Navigation/Navigation';
import { EmergencyBar } from '@components/common/EmergencyBar/EmergencyBar';
import { QuickExit } from '@components/common/QuickExit/QuickExit';
import { Home } from '@pages/Home/Home';
import { About } from '@pages/About/About';
import { Assessment } from '@pages/Emergency/Assessment';
import { Resources } from '@pages/Resources/Resources';
import { EmergencyProvider } from '@contexts/EmergencyContext';
import './index.css';

function App() {
  return (
    <EmergencyProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <QuickExit />
          <EmergencyBar />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/safety-plan" element={<div>Safety Plan Page - Coming Soon</div>} />
            <Route path="/chat" element={<div>Chat Support - Coming Soon</div>} />
            <Route path="/emergency" element={<div>Emergency Page - Coming Soon</div>} />
          </Routes>

          {/* Footer with emergency contacts */}
          <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="mb-4">
                <strong>Emergency:</strong> Call 112 (Police) | 114 (Medical) | 0800-123-456 (GBV Hotline)
              </p>
              <p className="text-gray-400 text-sm">
                Sauti Mpya - Confidential GBV Support Platform © 2024
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </EmergencyProvider>
  );
}

export default App;