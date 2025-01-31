import React from 'react';
import Factoid from './Factoid';

const StaggeredLayout = ({ title, subtitle, content, factoid }) => (
  <div className="relative">
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 text-lg mb-4">{subtitle}</p>
        <div className="space-y-4">
          {content.map((item, index) => (
            <p key={index} className="text-slate-600 leading-relaxed">{item}</p>
          ))}
        </div>
      </div>
      {factoid && (
        <div className="md:w-[500px] mt-8 md:mt-12">
          <Factoid {...factoid} />
        </div>
      )}
    </div>
  </div>
);

export default StaggeredLayout;
