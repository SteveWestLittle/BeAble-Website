import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github } from 'lucide-react';

function PageHeader() {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Our Research' },
    { to: '/app', label: 'Our App' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About Us' }
  ];

  return (
    <div className="rounded-t-2xl">
      <div className="text-center mb-12 pb-8 bg-gradient-to-b from-slate-200 to-slate-50 border-b-2 border-slate-300 -mx-6 -mt-10 px-6 pt-10 shadow-sm">
        <h1 className="text-6xl font-light text-slate-800 tracking-wide">
          Be<span className="font-semibold">ABLE</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light tracking-wide mb-6">
          Exploring AI Abilities for BC Disabilities
        </p>
        <div className="flex justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg ${
                location.pathname === link.to
                  ? 'text-blue-600 font-medium'
                  : 'text-slate-600 hover:text-blue-600'
              } transition-colors`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 p-4">
        <div className="flex space-x-4">
          <a
            href="https://github.com/SteveWestLittle/BeAble-Website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
