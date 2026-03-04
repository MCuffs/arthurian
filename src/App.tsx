import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { ResumePreview } from './pages/ResumePreview';
import { ConsultingDashboard } from './pages/ConsultingDashboard';
import { BlogListPage } from './pages/BlogListPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { VisaCalculator } from './pages/VisaCalculator';
import { ApplicationProxy } from './pages/ApplicationProxy';

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error('App runtime error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center px-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-md w-full text-center shadow-sm">
            <h2 className="text-slate-900 font-extrabold text-xl mb-2">Something went wrong</h2>
            <p className="text-slate-500 text-sm mb-5">A runtime error occurred. Please go back to Home and try again.</p>
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold"
            >
              Go Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> We can uncomment or create a new simplified NavBar later */}
      <AppErrorBoundary>
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/preview" element={<ResumePreview />} />
            <Route path="/dashboard/consulting" element={<ConsultingDashboard />} />
            <Route path="/visa-calculator" element={<VisaCalculator />} />
            <Route path="/proxy" element={<ApplicationProxy />} />
          </Routes>
        </main>
      </AppErrorBoundary>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
