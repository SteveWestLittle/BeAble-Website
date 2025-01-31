import React from 'react';
import { 
  Brain, Shield, Users, MessageSquare, Heart, Activity,
  Clock, Lightbulb, Zap, Target, ArrowRight
} from 'lucide-react';

const Research = () => {
  const [scrollRequest, setScrollRequest] = React.useState(null);
  const redditChart = import.meta.env.DEV ? '/media/Reddit data NVIVO chart.png' : '/BeAble-Website/media/Reddit data NVIVO chart.png';

  const sections = [
    {
      title: "Understanding Disability",
      icon: Brain,
      content: "Our research begins with a deep dive into understanding disability from multiple perspectives - medical, social, and personal experiences."
    },
    {
      title: "Privacy & Security",
      icon: Shield,
      content: "We prioritize user privacy and data security in our research and development process."
    },
    {
      title: "Community Focus",
      icon: Users,
      content: "Our approach centers on building and supporting communities of people with disabilities."
    },
    {
      title: "Communication",
      icon: MessageSquare,
      content: "We study how to facilitate better communication between users and their support networks."
    },
    {
      title: "Support Networks",
      icon: Heart,
      content: "Understanding the role of caregivers, family, and friends in supporting people with disabilities."
    },
    {
      title: "Health Monitoring",
      icon: Activity,
      content: "Researching ways to help users monitor and manage their health effectively."
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Real-time Support",
      description: "Access immediate assistance and resources when you need them most."
    },
    {
      icon: Lightbulb,
      title: "Smart Recommendations",
      description: "Receive personalized suggestions based on your specific needs and preferences."
    },
    {
      icon: Zap,
      title: "Quick Actions",
      description: "Streamlined interface for fast access to essential functions and emergency contacts."
    },
    {
      icon: Target,
      title: "Focused Solutions",
      description: "Targeted features designed specifically for different types of disabilities."
    }
  ];

  const handleScrollRequest = (index) => {
    setScrollRequest(index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <section.icon className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h3>
            <p className="text-gray-600">{section.content}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Research Findings
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Key Topics in Online Disability Communities
            </h3>
            <p className="text-gray-600 mb-8">
              Through our analysis of Reddit communities focused on disability, we identified several key topics that matter most to people with disabilities. This research helps us understand the real needs and challenges faced by our community.
            </p>
            <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={redditChart} 
                alt="Chart showing hot topics discussed by people with disabilities on Reddit" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features Based on Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="text-blue-500 font-medium inline-flex items-center hover:text-blue-600">
                Learn more <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
