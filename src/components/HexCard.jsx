import React from 'react';

const HexCard = ({ icon: Icon, title, items, category, isActive, onHover }) => (
  <div
    className={`relative group cursor-pointer transition-all duration-300 ${
      isActive ? 'scale-105' : 'hover:scale-105'
    }`}
    onMouseEnter={onHover}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${
        category === 'benefits'
          ? 'from-emerald-500/20 to-emerald-600/20'
          : category === 'challenges'
          ? 'from-rose-500/20 to-rose-600/20'
          : 'from-blue-500/20 to-blue-600/20'
      } rounded-2xl blur-xl transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
      }`}
    />
    <div className="relative bg-white rounded-2xl p-6 shadow-sm">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
          category === 'benefits'
            ? 'bg-emerald-100'
            : category === 'challenges'
            ? 'bg-rose-100'
            : 'bg-blue-100'
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            category === 'benefits'
              ? 'text-emerald-600'
              : category === 'challenges'
              ? 'text-rose-600'
              : 'text-blue-600'
          }`}
        />
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-slate-600 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HexCard;
