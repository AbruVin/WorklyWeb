import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(element);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
}

export function useCountUp(endValue, duration = 2000, startWhen = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * endValue));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [endValue, duration, startWhen]);

  return count;
}
