import React from 'react';
import { 
  Brain, Shield, Users, MessageSquare, Heart, Activity,
  Lightbulb, Workflow, Settings, GraduationCap, Target, Layers
} from 'lucide-react';

const DiagramCard = ({ title, items, color, icon: Icon }) => (
  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 ${color}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color.replace('border', 'bg').replace('500', '100')}`}>
      <Icon className={`w-6 h-6 ${color.replace('border', 'text')}`} />
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
);

const TriangleDiagram = () => {
  const sections = [
    {
      title: 'Benefits',
      icon: Brain,
      color: 'border-emerald-500',
      items: [
        'Enhanced independence and autonomy',
        'Improved accessibility to information',
        'Better social interaction capabilities',
        'Increased employment opportunities'
      ]
    },
    {
      title: 'Challenges',
      icon: Heart,
      color: 'border-rose-500',
      items: [
        'Technical complexity and learning curve',
        'Cost and resource limitations',
        'Privacy and security concerns',
        'Integration with existing systems'
      ]
    },
    {
      title: 'Solutions',
      icon: Settings,
      color: 'border-blue-500',
      items: [
        'User-centered design approach',
        'Collaborative development process',
        'Regular feedback and iteration',
        'Comprehensive support system'
      ]
    }
  ];

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div 
            key={section.title}
            className={`transform ${
              index === 1 ? 'lg:-translate-y-12' : ''
            }`}
          >
            <DiagramCard {...section} />
          </div>
        ))}
      </div>
      
      {/* Connecting Lines (visible on large screens) */}
      <div className="hidden lg:block">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] -translate-x-1/2 -translate-y-1/2 -z-10">
          <svg className="w-full h-full" viewBox="0 0 600 300">
            {/* Line from Benefits to Challenges */}
            <line 
              x1="150" y1="150" 
              x2="300" y2="50" 
              stroke="#94a3b8" 
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Line from Challenges to Solutions */}
            <line 
              x1="300" y1="50" 
              x2="450" y2="150" 
              stroke="#94a3b8" 
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Line from Solutions to Benefits */}
            <line 
              x1="450" y1="150" 
              x2="150" y2="150" 
              stroke="#94a3b8" 
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TriangleDiagram;
