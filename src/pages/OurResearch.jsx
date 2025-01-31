import React from 'react';
import {
  Brain, Users, Heart, ArrowRight, MessageSquare,
  Accessibility, Building2, HandMetal, Glasses, Megaphone,
  Briefcase, GanttChartSquare
} from 'lucide-react';
import Carousel from '../components/Carousel';
import AccessibilityGoalCarousel from '../components/AccessibilityGoalCarousel';

const OurResearch = () => {
  const redditChart = import.meta.env.DEV ? '/media/Reddit data NVIVO chart.png' : '/BeAble-Website/media/Reddit data NVIVO chart.png';

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Research</h2>
      <p className="text-lg text-gray-600 mb-12">
        We conducted extensive research to understand the needs of people with disabilities
        when using social media platforms. Our findings have shaped the development of BeAble.
      </p>
      <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-lg mb-12">
        <img 
          src={redditChart} 
          alt="Chart showing hot topics discussed by people with disabilities on Reddit" 
          className="w-full h-auto"
        />
      </div>
      <AccessibilityGoalCarousel />
    </div>
  );
};

export default OurResearch;
