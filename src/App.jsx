import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Research from './pages/Research';
import AppPage from './pages/AppPage';
import Resources from './pages/Resources';
import About from './pages/About';

const MainApp = () => {
  return (
    <Router basename={import.meta.env.DEV ? '/' : '/BeAble-Website'}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            BeAble
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8">
            Empowering Accessibility Through Community
          </p>
        </div>
        <Navigation />
        <Routes>
          <Route path="/research" element={<Research />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Navigate to="/research" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default MainApp;
