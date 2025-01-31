import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

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

          {/* Affiliate Links Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-light text-slate-800 mb-6 text-center">
              Affiliate Links
            </h3>
            <div className="flex justify-center">
              <a 
                href="https://glocalfoundation.ca/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <span className="font-semibold">GLOCAL Foundation</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Canada's Disability Actions Section */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-light text-slate-800 mb-6 text-center">
              Canada's Disability Actions
            </h3>
            <div className="space-y-6">
              {canadaLinks.map((link, index) => (
                <div 
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h4 className="text-xl font-semibold text-blue-600 mb-2 hover:text-blue-800 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-slate-600">
                      {link.description}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
