import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/solid';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out`}
    >
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        aria-label="Scroll to Top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;
