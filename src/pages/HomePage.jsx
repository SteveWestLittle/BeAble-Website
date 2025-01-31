import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import AccessibilityGoalCarousel from '../components/AccessibilityGoalCarousel';
import PageHeader from '../components/PageHeader';
import { 
  Brain, Shield, Users, MessageSquare, Heart, Activity,
  Lightbulb, Workflow, Settings, GraduationCap, Target, Layers, ArrowRight
} from 'lucide-react';

function HomePage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [scrollRequest, setScrollRequest] = useState(null);

  const sections = [
    { id: 'benefits', title: 'Benefits', index: 0 },
    { id: 'challenges', title: 'Challenges', index: 1 },
    { id: 'solutions', title: 'Solutions', index: 2 }
  ];

  const carouselItems = [
    {
      id: 'benefits',
      title: 'Benefits of AI for People with Disabilities',
      content: [
        {
          icon: <Brain className="w-8 h-8 text-emerald-600" />,
          title: 'Enhanced Independence',
          description: 'AI-powered assistive technologies enable greater autonomy in daily activities.'
        },
        {
          icon: <Shield className="w-8 h-8 text-emerald-600" />,
          title: 'Improved Safety',
          description: 'Smart monitoring and alert systems help prevent accidents and provide timely assistance.'
        },
        {
          icon: <Users className="w-8 h-8 text-emerald-600" />,
          title: 'Social Inclusion',
          description: 'Communication tools and social platforms facilitate better interaction and community participation.'
        },
        {
          icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
          title: 'Better Communication',
          description: 'Advanced speech recognition and text-to-speech technologies break down communication barriers.'
        }
      ]
    },
    {
      id: 'challenges',
      title: 'Challenges in AI Accessibility',
      content: [
        {
          icon: <Heart className="w-8 h-8 text-rose-600" />,
          title: 'User Experience',
          description: 'Ensuring AI interfaces are intuitive and accessible for users with different abilities.'
        },
        {
          icon: <Activity className="w-8 h-8 text-rose-600" />,
          title: 'Technical Limitations',
          description: 'Addressing accuracy and reliability issues in AI-powered assistive technologies.'
        },
        {
          icon: <Lightbulb className="w-8 h-8 text-rose-600" />,
          title: 'Training Data',
          description: 'Gathering diverse and representative data to train AI models effectively.'
        },
        {
          icon: <Workflow className="w-8 h-8 text-rose-600" />,
          title: 'Integration',
          description: 'Seamlessly incorporating AI solutions into existing assistive technologies.'
        }
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions and Future Directions',
      content: [
        {
          icon: <Settings className="w-8 h-8 text-blue-600" />,
          title: 'Customization',
          description: 'Developing adaptable AI systems that cater to individual needs and preferences.'
        },
        {
          icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
          title: 'Education',
          description: 'Training users and caregivers on effectively utilizing AI-powered assistive technologies.'
        },
        {
          icon: <Target className="w-8 h-8 text-blue-600" />,
          title: 'Standards',
          description: 'Establishing accessibility guidelines for AI development and implementation.'
        },
        {
          icon: <Layers className="w-8 h-8 text-blue-600" />,
          title: 'Collaboration',
          description: 'Fostering partnerships between technology providers and disability organizations.'
        }
      ]
    }
  ];

  const handleNavClick = (e, index) => {
    e.preventDefault();
    setCurrentSlideIndex(index);
    setScrollRequest(index);
  };

  const literatureReview = import.meta.env.DEV ? '/media/BeABLE Research Paper (9).docx' : '/BeAble-Website/media/BeABLE Research Paper (9).docx';
  const redditChart = import.meta.env.DEV ? '/media/Reddit data NVIVO chart.png' : '/BeAble-Website/media/Reddit data NVIVO chart.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-slate-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl px-6 py-10 relative border border-slate-100">
          <PageHeader />

          <div className="text-center mb-2">
            <h2 className="text-4xl font-light text-slate-800 mb-2 tracking-wide border-b border-slate-800 pb-[0.3rem] inline-block">
              Research Summary
            </h2>
          </div>

          <div className="mt-1.5 mb-4.5 text-center">
            <a 
              href={literatureReview}
              className="text-cyan-600 hover:text-cyan-800 transition-colors text-lg font-light tracking-wide inline-flex items-center gap-1 hover:gap-2 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the full literature review
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Hidden for now
          <nav className="flex justify-center mb-12">
            <div className="inline-flex gap-6 px-8 py-3 bg-white rounded-xl shadow-md border-2 border-slate-200">
              {sections.map((section) => (
                <React.Fragment key={section.id}>
                  {section.index > 0 && <span className="text-slate-300 font-light">|</span>}
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => handleNavClick(e, section.index)}
                    className={`text-sm font-medium tracking-wide transform hover:scale-105 transition-all
                      ${currentSlideIndex === section.index 
                        ? 'text-rose-800 font-semibold' 
                        : 'text-rose-600 hover:text-rose-800'}`}
                  >
                    {section.title}
                  </a>
                </React.Fragment>
              ))}
            </div>
          </nav>
          */}

          {/* C1: Carousel Section */}
          <div className="bg-green-50 rounded-2xl px-8 shadow-sm mb-6">
            <Carousel 
              items={carouselItems} 
              currentIndex={currentSlideIndex}
              onIndexChange={setCurrentSlideIndex}
              onScrollRequest={scrollRequest}
            />
          </div>

          {/* C2: Hot Topics Section */}
          <div className="bg-rose-50 rounded-2xl p-8 shadow-sm mb-6">
            <div className="text-center">
              <h2 className="text-3xl font-light text-slate-800 mb-2 tracking-wide">
                Hot Topics for Persons with Disabilities
              </h2>
              <p className="text-slate-600 text-lg mb-8 font-light tracking-wide">
                A qualitative data analysis of Reddit posts pertaining to disability in BC, Canada
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

          {/* C3: Accessibility Goals Section */}
          <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
            <AccessibilityGoalCarousel />
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
