// Scroll observer utilities for animations and tracking
// Consolidates IntersectionObserver logic used across the site

interface ObserverCallback {
  (entry: IntersectionObserverEntry): void;
}

/**
 * Creates an IntersectionObserver with common configuration
 * for scroll animations and tracking
 */
export function createScrollObserver(
  callback: ObserverCallback,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px',
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, defaultOptions);
}

/**
 * Handles scroll-hidden animation reveal
 */
export function handleScrollAnimation(entry: IntersectionObserverEntry): void {
  if (entry.isIntersecting) {
    if (entry.target.classList.contains('scroll-hidden')) {
      entry.target.classList.remove('scroll-hidden');
      entry.target.classList.add('scroll-visible');
    }
    if (entry.target.classList.contains('fade-up-hidden')) {
      entry.target.classList.remove('fade-up-hidden');
      entry.target.classList.add('fade-up-visible');
    }
  }
}

/**
 * Observes elements and applies animation classes when they enter viewport
 */
export function observeAnimations(
  elements: NodeListOf<Element>,
  observer?: IntersectionObserver
): IntersectionObserver {
  const animationObserver = observer || createScrollObserver(handleScrollAnimation);

  elements.forEach((el) => {
    animationObserver.observe(el);
  });

  return animationObserver;
}

/**
 * Fallback to ensure animations trigger even if observer fails
 */
export function setupAnimationFallback(elements: NodeListOf<Element>, delay: number = 3000): void {
  setTimeout(() => {
    elements.forEach((el) => {
      if (el.classList.contains('scroll-hidden')) {
        el.classList.remove('scroll-hidden');
        el.classList.add('scroll-visible');
      }
      if (el.classList.contains('fade-up-hidden')) {
        el.classList.remove('fade-up-hidden');
        el.classList.add('fade-up-visible');
      }
    });
  }, delay);
}
