// import React, { createContext, useState, useRef } from 'react';

// const ScrollContext = createContext();

// export const ScrollProvider = ({ children }) => {
//   const homeRef = useRef(null);
//   const winsRef = useRef(null);
//   const growthRef = useRef(null);
//   const pricingRef = useRef(null);

//   const [activeSection, setActiveSection] = useState('home');

//   const handleScroll = (section) => {
//     switch (section) {
//       case 'home':
//         homeRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'wins':
//         winsRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'growth':
//         growthRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'pricing':
//         pricingRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       default:
//         break;
//     }
//     setActiveSection(section);
//   };

//   return (
//     <ScrollContext.Provider value={{ homeRef, winsRef, growthRef, pricingRef, activeSection, handleScroll }}>
//       {children}
//     </ScrollContext.Provider>
//   );
// };

// export default ScrollContext;





import React, { createContext, useState, useRef, useEffect } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const homeRef = useRef(null);
  const winsRef = useRef(null);
  const growthRef = useRef(null);
  const pricingRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'wins':
        winsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'growth':
        growthRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'pricing':
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
    setActiveSection(section);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (homeRef.current) observer.observe(homeRef.current);
    if (winsRef.current) observer.observe(winsRef.current);
    if (growthRef.current) observer.observe(growthRef.current);
    if (pricingRef.current) observer.observe(pricingRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (winsRef.current) observer.unobserve(winsRef.current);
      if (growthRef.current) observer.unobserve(growthRef.current);
      if (pricingRef.current) observer.unobserve(pricingRef.current);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ homeRef, winsRef, growthRef, pricingRef, activeSection, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContext;
