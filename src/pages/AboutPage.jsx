import React from 'react';
import PageHeader from '../components/PageHeader';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-slate-800 mb-0 tracking-wide border-b border-slate-800 pb-2 inline-block">
              About Us
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              BeAble was started by Diana Drozdzik and Steven Little, both of whom have a deep personal relationship with disability and a heartfelt passion to help others. We are deeply grateful for the funding, support, and guidance from the non-profit organization GLOCAL, and we can't wait to take the next steps in the future of BeAble!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
