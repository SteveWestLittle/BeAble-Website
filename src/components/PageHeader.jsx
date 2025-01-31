import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function PageHeader() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Our Research' },
    { path: '/app', label: 'Our App' },
    { path: '/resources', label: 'Resources' },
    { path: '/about', label: 'About Us' }
  ];

  return (
    <>
      <div className="text-center mb-12 pb-8 bg-gradient-to-b from-slate-200 to-slate-50 border-b-2 border-slate-300 -mx-6 -mt-10 px-6 pt-10 shadow-sm">
        <h1 className="text-6xl font-light text-slate-800 mb-4 tracking-wide">
          Be<span className="font-semibold">ABLE</span>
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-light tracking-wide mb-6">
          Exploring AI Abilities for BC Disabilities
        </p>
        <div className="flex justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium tracking-wide transition-all hover:scale-105 ${
                location.pathname === link.path
                  ? 'text-rose-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default PageHeader;
