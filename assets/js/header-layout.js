(() => {
  const header = document.querySelector('.masthead');
  if (!header) return;
  const update = () => {
    document.documentElement.style.setProperty('--site-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  };
  update();
  if ('ResizeObserver' in window) new ResizeObserver(update).observe(header);
  window.addEventListener('resize', update, { passive: true });
  if (document.fonts) document.fonts.ready.then(update);
})();
