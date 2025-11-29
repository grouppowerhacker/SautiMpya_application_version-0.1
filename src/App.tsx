import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@components/common/Navigation';
import { EmergencyBar } from '@components/common/EmergencyBar';
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { Assessment, EmergencyResources } from '@pages/Emergency';
import { Resources } from '@pages/Resources';
import { Chat } from '@pages/Chat';
import { SafetyPlan } from '@pages/SafetyPlan';
import { EmergencyProvider } from '@contexts/EmergencyContext';
import '@/index.css';

function App() {
  return (
    <EmergencyProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <EmergencyBar />
          <Navigation />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/safety-plan" element={<SafetyPlan />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/emergency" element={<EmergencyResources />} />
          </Routes>
        </div>
      </Router>
    </EmergencyProvider>
  );
}

export default App;