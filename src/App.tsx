import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from '@components/common/Navigation';
import { Home } from '@pages/Home';
import { About } from '@pages/About';
import { Assessment, EmergencyResources } from '@pages/Emergency';
import { Resources } from '@pages/Resources';
import { Chat } from '@pages/Chat';
import { SafetyPlan } from '@pages/SafetyPlan';
import { Login } from '@pages/Login';
import { EmergencyProvider } from '@contexts/EmergencyContext';
import { AuthProvider, useAuth } from '@contexts/AuthContext';
import '@/index.css';

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E6A8C]"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

// Layout for authenticated pages
function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Navigation />
      {children}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <EmergencyProvider>
        <Router>
          <Routes>
            {/* Public Route */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <AppLayout>
                  <Home />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute>
                <AppLayout>
                  <About />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/assessment" element={
              <ProtectedRoute>
                <AppLayout>
                  <Assessment />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/resources" element={
              <ProtectedRoute>
                <AppLayout>
                  <Resources />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/safety-plan" element={
              <ProtectedRoute>
                <AppLayout>
                  <SafetyPlan />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <AppLayout>
                  <Chat />
                </AppLayout>
              </ProtectedRoute>
            } />
            <Route path="/emergency" element={
              <ProtectedRoute>
                <AppLayout>
                  <EmergencyResources />
                </AppLayout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </EmergencyProvider>
    </AuthProvider>
  );
}

export default App;
