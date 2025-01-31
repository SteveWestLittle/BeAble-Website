import React from 'react';
import PageHeader from '../components/PageHeader';

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-light text-slate-800 tracking-wide border-b border-slate-800 pb-2 inline-block">
              About Us
            </h2>
            <div className="mt-6">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                BeAble was started by Diana Drozdzik and Steven Little, both of whom have a deep personal relationship with disability and a heartfelt passion to help others. We are deeply grateful for the funding, support, and guidance from the non-profit organization GLOCAL, and we can't wait to take the next steps in the future of BeAble!
              </p>
              <a 
                href="https://www.linkedin.com/in/steven-little-7b6493186/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                Visit us on LinkedIn
                <svg 
                  className="w-4 h-4"
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
