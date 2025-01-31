import React, { useState } from 'react';
import HexCard from './HexCard';
import { 
  Briefcase, Building2, MessageSquare, Phone, ShoppingBag
} from 'lucide-react';

const AccessibilityGoalCarousel = () => {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      icon: Briefcase,
      title: 'Employment',
      category: 'goal',
      items: [
        'AI-powered personalized assistive technologies',
        'Workplace competency development through AI training',
        'Automated task assistance and workflow management',
        'Real-time communication support tools',
        'Inclusive workplace technologies'
      ]
    },
    {
      icon: Building2,
      title: 'Built Environment',
      category: 'goal',
      items: [
        'AI-integrated mobility devices and wheelchairs',
        'Smart robotics for task assistance',
        'Virtual reality for rehabilitation',
        'AI-powered navigation systems',
        'Adaptive environmental controls'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Information & Communication Technologies',
      category: 'goal',
      items: [
        'AI-enhanced text analysis for accessibility',
        'Virtual assistants for daily tasks',
        'Real-time captioning technology',
        'AI-powered educational tools',
        'Adaptive interface customization'
      ]
    },
    {
      icon: Phone,
      title: 'Communication',
      category: 'goal',
      items: [
        'AI-powered emotion recognition',
        'Sign language translation',
        'Augmentative communication devices',
        'Social skills training technology',
        'Community participation tools'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Procurement',
      category: 'goal',
      items: [
        'AI-powered service coordination',
        'At-home therapy solutions',
        'Health management systems',
        'Improved service accessibility',
        'Healthcare integration tools'
      ]
    }
  ];

  return (
    <div className="mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-3 tracking-wide">
          Empowering Canada's Accessibility Goals with AI
        </h2>
        <p className="text-slate-600 text-lg font-light tracking-wide">
          How AI can enhance and support Canada's key accessibility initiatives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
