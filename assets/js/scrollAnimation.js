let isScrolling;
window.addEventListener('scroll', () => {
  document.body.classList.add('scroll-animating');
  
  clearTimeout(isScrolling);

  isScrolling = setTimeout(() => {
    document.body.classList.remove('scroll-animating');
  }, 1500); // animacja trwa 1.5s
});
