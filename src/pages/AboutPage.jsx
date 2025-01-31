import React from 'react';
import PageHeader from '../components/PageHeader';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-800 pb-2 inline-block">
              About Us
            </h2>
          </div>

          {/* About content will go here */}
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-600 text-lg text-center">
              Coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
