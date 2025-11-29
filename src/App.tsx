import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@components/common/Navigation';
import { EmergencyBar } from '@components/common/EmergencyBar';
import { QuickExit } from '@components/common/QuickExit';
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { Assessment } from '@pages/Emergency';
import { Resources } from '@pages/Resources';
import { EmergencyProvider } from '@contexts/EmergencyContext';
import '@/index.css';

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
            <Route path="/safety-plan" element={<div className="min-h-screen bg-gray-50 py-8"><div className="max-w-4xl mx-auto px-4 text-center"><h1 className="text-3xl font-bold text-[#1E6A8C]">Safety Plan - Coming Soon</h1></div></div>} />
            <Route path="/chat" element={<div className="min-h-screen bg-gray-50 py-8"><div className="max-w-4xl mx-auto px-4 text-center"><h1 className="text-3xl font-bold text-[#1E6A8C]">Chat Support - Coming Soon</h1></div></div>} />
            <Route path="/emergency" element={<div className="min-h-screen bg-gray-50 py-8"><div className="max-w-4xl mx-auto px-4 text-center"><h1 className="text-3xl font-bold text-[#1E6A8C]">Emergency Resources - Coming Soon</h1></div></div>} />
          </Routes>
        </div>
      </Router>
    </EmergencyProvider>
  );
}

export default App;