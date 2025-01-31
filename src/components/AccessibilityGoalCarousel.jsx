import React, { useState } from 'react';
import HexCard from './HexCard';
import { 
  Accessibility, Building2, HandMetal, Glasses, Megaphone,
  Briefcase, GanttChartSquare
} from 'lucide-react';

const AccessibilityGoalCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      icon: Accessibility,
      title: 'Universal Design',
      category: 'benefits',
      items: [
        'Inclusive interfaces for all abilities',
        'Adaptable user experiences',
        'Reduced barriers to entry'
      ]
    },
    {
      icon: Building2,
      title: 'Infrastructure',
      category: 'challenges',
      items: [
        'Robust system architecture',
        'Scalable solutions',
        'Reliable performance'
      ]
    },
    {
      icon: HandMetal,
      title: 'Empowerment',
      category: 'benefits',
      items: [
        'Enhanced independence',
        'Skill development',
        'Confidence building'
      ]
    },
    {
      icon: Glasses,
      title: 'Innovation',
      category: 'solutions',
      items: [
        'Cutting-edge technology',
        'Creative solutions',
        'Forward-thinking approach'
      ]
    },
    {
      icon: Megaphone,
      title: 'Advocacy',
      category: 'benefits',
      items: [
        'Community engagement',
        'Policy influence',
        'Awareness raising'
      ]
    },
    {
      icon: Briefcase,
      title: 'Employment',
      category: 'solutions',
      items: [
        'Job opportunities',
        'Workplace integration',
        'Career development'
      ]
    },
    {
      icon: GanttChartSquare,
      title: 'Planning',
      category: 'challenges',
      items: [
        'Strategic roadmap',
        'Resource allocation',
        'Timeline management'
      ]
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-3 tracking-wide">
          Our Accessibility Goals
        </h2>
        <p className="text-slate-600 text-lg font-light tracking-wide">
          Key focus areas in our mission to enhance accessibility
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <HexCard
            key={index}
            {...card}
            isActive={activeCard === index}
            onHover={() => setActiveCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AccessibilityGoalCarousel;
