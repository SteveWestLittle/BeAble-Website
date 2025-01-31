import React from 'react';
import PageHeader from '../components/PageHeader';

function AppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />

          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-800 pb-2 inline-block">
              Our App
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Content coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppPage;
