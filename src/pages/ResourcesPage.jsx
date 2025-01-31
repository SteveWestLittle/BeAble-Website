import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ArrowRight from '../components/ArrowRight';

function ResourcesPage() {
  const canadaLinks = [
    {
      title: "Creating Accessibility Standards",
      description: "Learn about Canada's process for creating accessibility standards",
      url: "https://accessible.canada.ca/creating-accessibility-standards"
    },
    {
      title: "Disability Inclusion Action Plan",
      description: "Canada's comprehensive plan for disability inclusion",
      url: "https://www.canada.ca/en/employment-social-development/programs/disability-inclusion-action-plan.html"
    },
    {
      title: "Digital Accessibility in Government",
      description: "Guidelines for digital accessibility in Canadian government",
      url: "https://a11y.canada.ca/en/digital-accessibility-in-the-government-of-canada/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />

          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6 tracking-wide border-b border-slate-800 pb-2 inline-block">
              Resources
            </h2>
          </div>

          {/* Partnerships Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-light text-slate-800 mb-6 tracking-wide text-center">
              Partnerships
            </h2>
            <div className="flex justify-center">
              <a
                href="https://glocalfoundation.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center group"
              >
                <img
                  src="/media/glocal.png"
                  alt="Glocal Foundation Logo"
                  className="w-48 h-auto transition-transform group-hover:scale-105"
                />
                <p className="text-sm text-slate-600 mt-2 max-w-xs text-center">
                  GLOCAL is a national not-for-profit organization that promotes digital civic engagement through local participation and global understanding in Canada.
                </p>
              </a>
            </div>
          </div>

          {/* Podcast Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-light text-slate-800 mb-6 text-center">
              Breathing with Barriers Podcast
            </h3>
            <div className="bg-slate-100 rounded-xl p-6 shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-full max-w-md">
                  <audio 
                    className="w-full" 
                    controls
                    preload="metadata"
                  >
                    <source src="/path/to/audio.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <p className="text-slate-600 text-sm">
                  Audio file coming soon...
                </p>
              </div>
            </div>
          </div>

          {/* Canada's Disability Actions */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl font-light text-slate-800 mb-6 tracking-wide text-center">
              Canada's Disability Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://a11y.canada.ca/en/digital-accessibility-in-the-government-of-canada/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">Digital Accessibility</h3>
                <p className="text-slate-600 mb-3">
                  Government of Canada's digital accessibility toolkit, providing standards, guidelines, and resources for creating accessible digital content.
                </p>
                <span className="text-rose-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a 
                href="https://accessible.canada.ca/creating-accessibility-standards"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">Accessibility Standards</h3>
                <p className="text-slate-600 mb-3">
                  Standards development for employment, built environment, communication, and other priority areas identified in the Accessible Canada Act.
                </p>
                <span className="text-rose-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
              <a 
                href="https://www.canada.ca/en/employment-social-development/programs/disability-inclusion-action-plan.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors">Disability Inclusion Plan</h3>
                <p className="text-slate-600 mb-3">
                  Action plan focusing on financial security, employment, accessible communities, and modernizing disability support programs.
                </p>
                <span className="text-rose-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
