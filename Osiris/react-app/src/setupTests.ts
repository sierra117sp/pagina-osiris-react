import '@testing-library/jest-dom';

global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return []; }
  get root() { return null; }
  get rootMargin() { return ''; }
  get thresholds() { return []; }
};
