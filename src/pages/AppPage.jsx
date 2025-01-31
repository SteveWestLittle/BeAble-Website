import React from 'react';
import PageHeader from '../components/PageHeader';
import { ArrowRight, Smartphone, Code, Users, Target, Cog, Shield, Heart, Brain, Zap, HandHeart, Globe, MessageSquare } from 'lucide-react';

function AppPage() {
  const appFeatures = [
    {
      title: "AI-Powered Communication",
      icon: Brain,
      description: "Leveraging OpenAI's technology to provide real-time communication assistance and support.",
      points: [
        "Natural language processing for intuitive interaction",
        "Context-aware responses and suggestions",
        "Personalized communication patterns"
      ]
    },
    {
      title: "Accessibility First",
      icon: Heart,
      description: "Designed with accessibility as a core principle, not an afterthought.",
      points: [
        "WCAG 2.1 AA compliance",
        "Screen reader optimization",
        "Customizable interface settings"
      ]
    },
    {
      title: "Quick Actions",
      icon: Zap,
      description: "Essential features accessible with minimal interaction.",
      points: [
        "One-touch emergency contacts",
        "Voice command shortcuts",
        "Gesture-based navigation"
      ]
    }
  ];

  const developmentPrinciples = [
    {
      title: "User-Centered Design",
      description: "Every feature is developed based on direct feedback from the BC disability community",
      icon: Users
    },
    {
      title: "Privacy & Security",
      description: "End-to-end encryption and strict data protection measures",
      icon: Shield
    },
    {
      title: "Continuous Improvement",
      description: "Regular updates based on user feedback and emerging technologies",
      icon: Target
    }
  ];

  const communityImpact = [
    {
      title: "Community Engagement",
      icon: HandHeart,
      description: "Working directly with BC's disability community to ensure our app meets real needs.",
      highlights: [
        "Regular feedback sessions",
        "Community advisory board",
        "User testing programs"
      ]
    },
    {
      title: "Global Accessibility",
      icon: Globe,
      description: "Making the app accessible to everyone, regardless of their disability or technological expertise.",
      highlights: [
        "Multi-language support",
        "Cultural considerations",
        "Universal design principles"
      ]
    },
    {
      title: "Ongoing Dialogue",
      icon: MessageSquare,
      description: "Creating an open channel for continuous feedback and improvement.",
      highlights: [
        "User feedback system",
        "Community forums",
        "Regular updates based on needs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg px-6 py-10 relative">
          <PageHeader />
          
          <div className="text-center mb-4">
            <h2 className="text-4xl font-light text-slate-800 mb-2 tracking-wide border-b border-slate-800 pb-2 inline-block">
              App Development Blueprint
            </h2>
            <div className="mt-2">
              <a 
                href="/media/BeAble App Design & Development Blueprint (1).docx" 
                className="text-rose-600 hover:text-rose-800 transition-colors text-lg font-light tracking-wide inline-flex items-center gap-1 hover:gap-2 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the full development blueprint here
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Core Features */}
          <div className="bg-rose-50 rounded-2xl p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-light text-slate-800 mb-6 text-center">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {appFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-rose-100 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-rose-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <span className="text-rose-500 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Community Impact */}
          <div className="bg-green-50 rounded-2xl p-8 shadow-sm mb-6">
            <h3 className="text-2xl font-light text-slate-800 mb-6 text-center">Community Impact & Engagement</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {communityImpact.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600">
                          <span className="text-green-500 mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Development Principles */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-light text-slate-800 mb-6 text-center">Development Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {developmentPrinciples.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AppPage;
