// animations.js

export const pageVariants = {
    initial: {
      opacity: 0,
      y: "-100%",
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: "100%",
    },
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  
  // You can define more animations here as needed.
  