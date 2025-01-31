import React from 'react';

const Factoid = ({ icon: Icon, title, content }) => (
  <div className="bg-slate-50/50 backdrop-blur-sm border border-slate-200 rounded-lg p-4 flex gap-4 items-start max-w-[500px]">
    <div className="p-2 rounded-full bg-rose-100">
      <Icon className="w-5 h-5 text-rose-600" />
    </div>
    <div>
      <h4 className="font-medium text-slate-800 text-sm mb-1">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{content}</p>
    </div>
  </div>
);

export default Factoid;
