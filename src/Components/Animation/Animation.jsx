import React, { useEffect, useRef } from "react";
import "./Animation.css"; // CSS for animations

const AnimatedComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible"); // Add a class to trigger animation
        }
      },
      { threshold: 0.5 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="box">
      <h2>I'm Animating!</h2>
    </div>
  );
};

export default AnimatedComponent;
