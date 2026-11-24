import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Generation Dental Patient Portal',
  description: 'Complete forms before you arrive. Secure patient portal for Next Generation Dental.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-blue-800">Next Generation Dental</a>
            <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded">Get Started</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-blue-900 text-white text-center py-6 mt-12">
          <p>For patients of Next Generation Dental™</p>
          <p className="text-sm mt-2"><a href="/privacy" className="underline">Privacy</a> | <a href="/support" className="underline">Support</a></p>
        </footer>
      </body>
    </html>
  );
}