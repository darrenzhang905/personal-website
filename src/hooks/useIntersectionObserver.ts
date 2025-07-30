import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  disconnectOnIntersect?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    disconnectOnIntersect = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (disconnectOnIntersect) {
            observer.disconnect();
          }
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [root, rootMargin, threshold, disconnectOnIntersect]);

  return { ref, isVisible };
}