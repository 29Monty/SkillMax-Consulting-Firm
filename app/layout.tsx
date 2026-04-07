import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { I18nProvider } from '../lib/i18n';

export const metadata = {
  title: 'SkillMax Consulting - Premium Development & Organizational Consulting in East Africa',
  description: 'Impact-driven consulting firm specializing in project evaluations, third-party monitoring, organizational capacity development, proposal writing, and leadership development for donors, NGOs, and governments across East Africa.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <I18nProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ChatWidget />
        </I18nProvider>
      </body>
    </html>
  );
}
