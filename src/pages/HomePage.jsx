import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [scrollRequest, setScrollRequest] = useState(null);
  const refs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    if (scrollRequest !== null && refs[scrollRequest].current) {
      refs[scrollRequest].current.scrollIntoView({ behavior: 'smooth' });
      setScrollRequest(null);
    }
  }, [scrollRequest]);

  const handleScrollClick = (index) => {
    setScrollRequest(index);
  };

  const redditChart = import.meta.env.DEV ? '/media/Reddit data NVIVO chart.png' : '/BeAble-Website/media/Reddit data NVIVO chart.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            BeAble
          </h1>
          <Link to="/resources" className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
            Resources
          </Link>
          <p className="text-xl text-gray-600 mt-4">
            Empowering the disability community through technology and research
          </p>
        </header>

        <nav className="mb-16">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            {['Our Mission', 'Research', 'Technology', 'Get Involved'].map((item, index) => (
              <li key={item}>
                <button
                  onClick={() => handleScrollClick(index)}
                  className="px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200 text-gray-700 hover:text-gray-900"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section ref={refs[0]} className="mb-20 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Mission</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              BeAble is dedicated to revolutionizing how people with disabilities navigate and interact with technology. 
              Our mission is to create innovative solutions that enhance accessibility, promote independence, and improve 
              the quality of life for individuals with disabilities.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through cutting-edge research and technology development, we strive to bridge the gap between disability 
              and accessibility, ensuring that everyone has equal access to digital resources and opportunities.
            </p>
          </div>
        </section>

        <section ref={refs[1]} className="mb-20 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Research</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding Community Needs</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our research focuses on understanding the unique challenges faced by people with disabilities in their 
              daily interactions with technology. Through comprehensive analysis of community discussions and user 
              experiences, we identify key areas where technological solutions can make the most impact.
            </p>
            <div className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={redditChart} 
                alt="Chart showing hot topics discussed by people with disabilities on Reddit" 
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">
              Analysis of discussions in disability-related communities
            </p>
          </div>
        </section>

        <section ref={refs[2]} className="mb-20 scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Technology</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovative Solutions</h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop cutting-edge technologies that address specific challenges identified through our research. 
                  Our solutions range from adaptive interfaces to AI-powered accessibility tools, all designed with the 
                  user's needs at the forefront.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">User-Centered Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every solution we create is developed in close collaboration with the disability community, ensuring 
                  that our technology truly meets their needs and preferences while maintaining ease of use and 
                  effectiveness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section ref={refs[3]} className="scroll-mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get Involved</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-8 text-center">
                Join us in our mission to make technology more accessible for everyone. Whether you're a developer, 
                researcher, or community member, your contribution can make a difference.
              </p>
              <div className="flex justify-center">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
