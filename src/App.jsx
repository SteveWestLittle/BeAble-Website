import React, { useState, useRef, useEffect } from 'react';
import { 
  Brain, Shield, Users, MessageSquare, Heart, Activity,
  Lightbulb, Workflow, Settings, GraduationCap, Target, Layers,
  Info, Book, LineChart, Users2, ChevronLeft, ChevronRight,
  Accessibility, Building2, HandMetal, Glasses, Megaphone,
  Briefcase, GanttChartSquare
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';

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

const StaggeredLayout = ({ title, subtitle, content, factoid }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  return (
    <div className="relative py-12">
      <h2 className="text-xl font-light text-slate-800 mb-2 text-center tracking-wider uppercase">
        {title}
      </h2>
      <p className="text-sm text-slate-600 mb-8 text-center max-w-md mx-auto">
        {subtitle}
      </p>
      
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <line 
          x1="35%" y1="35%" 
          x2="65%" y2="35%" 
          stroke={activeIndex !== null ? "#94A3B8" : "#E2E8F0"} 
          strokeWidth="2"
          className="transition-colors duration-300"
        />
        <line 
          x1="35%" y1="35%" 
          x2="50%" y2="65%" 
          stroke={activeIndex !== null ? "#94A3B8" : "#E2E8F0"} 
          strokeWidth="2"
          className="transition-colors duration-300"
        />
        <line 
          x1="65%" y1="35%" 
          x2="50%" y2="65%" 
          stroke={activeIndex !== null ? "#94A3B8" : "#E2E8F0"} 
          strokeWidth="2"
          className="transition-colors duration-300"
        />
      </svg>

      <div className="relative flex flex-col gap-16">
        <div className="flex justify-center space-x-12">
          <div className="transform -translate-x-16">
            <div className="bg-white/40 backdrop-blur-sm p-1 rounded-lg w-[350px]">
              <HexCard {...content[0]} isActive={activeIndex === 0} onHover={(active) => setActiveIndex(active ? 0 : null)} />
            </div>
          </div>
          <div className="transform translate-x-16">
            <div className="bg-white/40 backdrop-blur-sm p-1 rounded-lg w-[350px]">
              <HexCard {...content[1]} isActive={activeIndex === 1} onHover={(active) => setActiveIndex(active ? 1 : null)} />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="transform translate-y-4">
            <div className="bg-white/40 backdrop-blur-sm p-1 rounded-lg w-[350px]">
              <HexCard {...content[2]} isActive={activeIndex === 2} onHover={(active) => setActiveIndex(active ? 2 : null)} />
            </div>
          </div>
        </div>

        {factoid && (
          <div className="mt-12 flex justify-center">
            <Factoid {...factoid} />
          </div>
        )}
      </div>
    </div>
  );
};

const HexCard = ({ icon: Icon, title, items, category, isActive, onHover }) => {
  return (
    <div 
      className={`
        relative p-6 transition-all duration-300 w-full max-w-md
        ${isActive ? 'scale-105' : 'hover:scale-102'}
        ${category === 'benefit' ? 'bg-gradient-to-br from-red-50 to-rose-100 border-l-4 border-rose-500' :
          category === 'challenge' ? 'bg-gradient-to-br from-blue-50 to-indigo-100 border-l-4 border-blue-500' :
          'bg-gradient-to-br from-emerald-50 to-green-100 border-l-4 border-emerald-500'}
        rounded-lg shadow-md
      `}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="flex items-start space-x-4">
        <div className={`
          p-3 rounded-full
          ${category === 'benefit' ? 'bg-rose-200' :
            category === 'challenge' ? 'bg-blue-200' :
            'bg-emerald-200'}
        `}>
          <Icon className={`
            w-6 h-6
            ${category === 'benefit' ? 'text-rose-700' :
              category === 'challenge' ? 'text-blue-700' :
              'text-emerald-700'}
          `} />
        </div>
        <div className="flex-1">
          <h3 className={`
            font-medium text-lg mb-3 tracking-tight
            ${category === 'benefit' ? 'text-rose-900' :
              category === 'challenge' ? 'text-blue-900' :
              'text-emerald-900'}
          `}>
            {title}
          </h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start space-x-2 leading-relaxed">
                <span className={`
                  block w-1.5 h-1.5 mt-1.5 rounded-full
                  ${category === 'benefit' ? 'bg-rose-400' :
                    category === 'challenge' ? 'bg-blue-400' :
                    'bg-emerald-400'}
                `} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Carousel = ({ items, currentIndex, onIndexChange, onScrollRequest }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && onScrollRequest === currentIndex) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * currentIndex,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, onScrollRequest]);

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const newIndex = Math.max(0, Math.min(index, items.length - 1));
      onIndexChange(newIndex);
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * newIndex,
        behavior: 'smooth'
      });
    }
  };

  const next = () => scrollToIndex(currentIndex + 1);
  const prev = () => scrollToIndex(currentIndex - 1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== currentIndex) {
        onIndexChange(index);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, onIndexChange]);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className="flex-none w-full snap-center"
          >
            <StaggeredLayout {...item} />
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        disabled={currentIndex === 0}
        className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm
          ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110 transition-all'}`}
      >
        <ChevronLeft className="w-6 h-6 text-slate-700" />
      </button>

      <button
        onClick={next}
        disabled={currentIndex === items.length - 1}
        className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 shadow-lg backdrop-blur-sm
          ${currentIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white hover:scale-110 transition-all'}`}
      >
        <ChevronRight className="w-6 h-6 text-slate-700" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${currentIndex === index ? 'bg-rose-500 w-4' : 'bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

const AccessibilityGoalCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const goals = [
    {
      title: "Equal Access to Information",
      icon: Glasses,
      description: "AI-powered tools can convert complex information into accessible formats, providing real-time text-to-speech, automated captioning, and simplified content summaries to ensure everyone has equal access to digital information.",
    },
    {
      title: "Physical Accessibility",
      icon: Building2,
      description: "AI can enhance physical accessibility through smart navigation systems, automated doors and elevators, and personalized environmental controls, making spaces more adaptable to individual needs.",
    },
    {
      title: "Communication Support",
      icon: Megaphone,
      description: "Natural Language Processing and AI can facilitate better communication through sign language recognition, speech-to-text conversion, and augmentative communication devices that adapt to user preferences.",
    },
    {
      title: "Employment Opportunities",
      icon: Briefcase,
      description: "AI can create more inclusive workplaces by providing adaptive tools, automated assistance for tasks, and identifying potential workplace accommodations that match individual abilities.",
    },
    {
      title: "Independent Living",
      icon: HandMetal,
      description: "Smart home technologies powered by AI can support independent living through automated assistance, predictive care needs, and adaptive environmental controls tailored to individual capabilities.",
    },
    {
      title: "Social Inclusion",
      icon: Users2,
      description: "AI can facilitate social connections through accessible social platforms, real-time translation services, and adaptive communication tools that help bridge social barriers.",
    },
    {
      title: "Service Integration",
      icon: GanttChartSquare,
      description: "AI systems can coordinate and streamline access to various support services, creating a more integrated and efficient support network for individuals with disabilities.",
    }
  ];

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const newIndex = Math.max(0, Math.min(index, goals.length - 1));
      setCurrentIndex(newIndex);
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * newIndex,
        behavior: 'smooth'
      });
    }
  };

  const next = () => scrollToIndex(currentIndex + 1);
  const prev = () => scrollToIndex(currentIndex - 1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.offsetWidth);
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div className="relative w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light text-slate-800 mb-2 tracking-wide">
          7 Key Accessibility Goals
        </h2>
        <p className="text-slate-600 text-lg font-light tracking-wide">
          How AI can help achieve accessibility objectives
        </p>
      </div>

      <div className="relative">
        <div 
          ref={containerRef}
          className="flex overflow-x-hidden snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <div 
                key={index}
                className="flex-none w-full snap-center px-4"
              >
                <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 transition-all">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 bg-rose-50 rounded-full">
                      <Icon className="w-12 h-12 text-rose-600" />
                    </div>
                    <h3 className="text-2xl font-medium text-slate-800 mb-4">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-rose-50 hover:scale-110 transition-all'}`}
        >
          <ChevronLeft className="w-6 h-6 text-slate-700" />
        </button>

        <button
          onClick={next}
          disabled={currentIndex === goals.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white shadow-lg
            ${currentIndex === goals.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-rose-50 hover:scale-110 transition-all'}`}
        >
          <ChevronRight className="w-6 h-6 text-slate-700" />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {goals.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all
              ${currentIndex === index ? 'bg-rose-500 w-4' : 'bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const redditChart = import.meta.env.DEV ? '/media/Reddit data NVIVO chart.png' : '/BeAble-Website/media/Reddit data NVIVO chart.png';

  const facts = {
    healthcare: {
      icon: Book,
      title: "Social Model of Disability",
      content: "Disability is defined as an interaction effect between individuals and their environment, affecting how they participate in society."
    },
    communication: {
      icon: Info,
      title: "Communication Challenges",
      content: "Many deaf children do not have access to spoken language from birth, impacting their ability to develop literacy skills and affecting language acquisition."
    },
    workplace: {
      icon: LineChart,
      title: "Employment Barriers",
      content: "Data from Stats Canada (2017) highlights barriers including lack of transportation, limited educational opportunities, and inadequate workplace accommodations."
    },
    education: {
      icon: Users2,
      title: "Accessibility Definition",
      content: "Canada's Disability Action Plan defines accessibility as the degree to which a product, service, program or environment is available to be accessed or used by all."
    }
  };

  const pathways = [
    {
      title: "Healthcare & AI Integration",
      subtitle: "AI diagnostic tools enable early detection and personalized treatment, while addressing privacy concerns through inclusive design practices.",
      content: [
        {
          category: 'benefit',
          icon: Brain,
          title: "AI-Enhanced Diagnostics",
          items: [
            "Pattern recognition in medical data",
            "Early condition detection",
            "Personalized treatment plans",
            "Integrated health monitoring"
          ]
        },
        {
          category: 'challenge',
          icon: Shield,
          title: "Privacy & Ethics",
          items: [
            "Health data protection",
            "Algorithm bias mitigation",
            "Consent management",
            "Access control systems"
          ]
        },
        {
          category: 'solution',
          icon: Heart,
          title: "Inclusive Design",
          items: [
            "User-centered development",
            "Diverse data representation",
            "Ethical AI frameworks",
            "Continuous validation"
          ]
        }
      ],
      factoid: facts.healthcare
    },
    {
      title: "Communication & Accessibility",
      subtitle: "AI-powered translation and adaptive interfaces break down communication barriers through customizable, multi-modal solutions.",
      content: [
        {
          category: 'benefit',
          icon: MessageSquare,
          title: "Enhanced Interaction",
          items: [
            "Real-time translation",
            "Adaptive interfaces",
            "Multi-modal communication",
            "Context-aware assistance"
          ]
        },
        {
          category: 'challenge',
          icon: Shield,
          title: "Technical Barriers",
          items: [
            "Interface complexity",
            "Device compatibility",
            "Learning curve issues",
            "Resource limitations"
          ]
        },
        {
          category: 'solution',
          icon: Activity,
          title: "Adaptive Solutions",
          items: [
            "Customizable interfaces",
            "Progressive learning",
            "Cross-platform support",
            "Community feedback"
          ]
        }
      ],
      factoid: facts.communication
    },
    {
      title: "Workplace Integration",
      subtitle: "Automated assistance and personalized training platforms enhance workplace accessibility while addressing implementation challenges.",
      content: [
        {
          category: 'benefit',
          icon: Lightbulb,
          title: "Professional Empowerment",
          items: [
            "Automated assistance tools",
            "Skill development platforms",
            "Workplace accessibility",
            "Remote work enablement"
          ]
        },
        {
          category: 'challenge',
          icon: Workflow,
          title: "Implementation Barriers",
          items: [
            "Training requirements",
            "Technology integration",
            "Cost considerations",
            "Adoption resistance"
          ]
        },
        {
          category: 'solution',
          icon: Settings,
          title: "Systemic Solutions",
          items: [
            "Policy framework development",
            "Stakeholder collaboration",
            "Incremental implementation",
            "Success metrics tracking"
          ]
        }
      ],
      factoid: facts.workplace
    },
    {
      title: "Education & Learning",
      subtitle: "Adaptive learning pathways and universal design principles create inclusive educational experiences while overcoming technological barriers.",
      content: [
        {
          category: 'benefit',
          icon: GraduationCap,
          title: "Personalized Learning",
          items: [
            "Adaptive learning paths",
            "Multi-modal content delivery",
            "Real-time progress tracking",
            "Interactive educational tools"
          ]
        },
        {
          category: 'challenge',
          icon: Target,
          title: "Learning Barriers",
          items: [
            "Digital literacy gaps",
            "Accessibility standards",
            "Resource availability",
            "Technology adaptation"
          ]
        },
        {
          category: 'solution',
          icon: Layers,
          title: "Educational Framework",
          items: [
            "Universal design principles",
            "Blended learning approaches",
            "Assistive technology integration",
            "Continuous assessment methods"
          ]
        }
      ],
      factoid: facts.education
    }
  ];

  const carouselItems = [
    { title: "Healthcare & AI Integration", content: pathways[0].content, subtitle: pathways[0].subtitle, factoid: facts.healthcare },
    { title: "Communication & Accessibility", content: pathways[1].content, subtitle: pathways[1].subtitle, factoid: facts.communication },
    { title: "Workplace Integration", content: pathways[2].content, subtitle: pathways[2].subtitle, factoid: facts.workplace },
    { title: "Education & Learning", content: pathways[3].content, subtitle: pathways[3].subtitle, factoid: facts.education }
  ];

  const sections = [
    { id: 'healthcare', title: 'Healthcare', index: 0 },
    { id: 'communication', title: 'Communication', index: 1 },
    { id: 'workplace', title: 'Workplace', index: 2 },
    { id: 'education', title: 'Education', index: 3 }
  ];

  const handleNavClick = (e, index) => {
    e.preventDefault();
    // setCurrentSlideIndex(index);
    // setScrollRequest(index);
  };

  return (
    <Router basename={import.meta.env.DEV ? '/' : '/BeAble-Website'}>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-6xl font-bold text-center text-gray-900 mb-8">
            BeAble
          </h1>
        </div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/our-research" replace />} />
          <Route path="/our-research" element={
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Research</h2>
              <p className="text-lg text-gray-600 mb-12">
                We conducted extensive research to understand the needs of people with disabilities
                when using social media platforms. Our findings have shaped the development of BeAble.
              </p>
              <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={redditChart} 
                  alt="Chart showing hot topics discussed by people with disabilities on Reddit" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          } />
          <Route path="/our-app" element={
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our App</h2>
              <Carousel items={carouselItems} />
            </div>
          } />
          <Route path="/research" element={
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Research</h2>
              <AccessibilityGoalCarousel />
            </div>
          } />
          <Route path="/about-us" element={
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
              <p className="text-lg text-gray-600 mb-12">
                We are a team of passionate individuals dedicated to creating accessible technologies.
              </p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;