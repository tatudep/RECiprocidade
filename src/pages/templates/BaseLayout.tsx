import React from 'react';
import Header from '../../components/organisms/Header';

interface BaseLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  className?: string;
}

export function BaseLayout({ children, showHeader = true, className }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {showHeader && <Header />}
      <main className={`container mx-auto px-4 py-8 ${className}`}>
        {children}
      </main>
    </div>
  );
} 