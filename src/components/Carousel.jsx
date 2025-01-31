import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ items, currentIndex, onIndexChange, onScrollRequest }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (onScrollRequest !== null) {
      handleSlideChange(onScrollRequest);
    }
  }, [onScrollRequest]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    onIndexChange(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    handleSlideChange(newIndex);
  };

  return (
    <div className="relative px-4 py-8">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-slate-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-slate-50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-slate-600" />
      </button>

      {/* Slides */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="w-full flex-shrink-0 px-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">{item.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {item.content.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="flex items-center justify-center mb-4">
                        {card.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">{card.title}</h4>
                      <p className="text-slate-600 text-sm">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-slate-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
