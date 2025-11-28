import { ReactNode } from 'react';
import { Navigation } from './Navigation';
import { EmergencyBar } from './EmergencyBar';
import { QuickExit } from './QuickExit';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 pb-16">
      <div className="african-pattern"></div>
      <QuickExit />
      <Navigation />
      <main className="relative z-10">
        {children}
      </main>
      <EmergencyBar />
    </div>
  );
}
