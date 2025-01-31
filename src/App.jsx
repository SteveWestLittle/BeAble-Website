import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import AppPage from './pages/AppPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;