(() => {
  const disclosure = document.querySelector('.contact-qr');
  if (!disclosure) return;
  const trigger = disclosure.querySelector('summary');
  let pinned = false;
  const close = () => { pinned = false; disclosure.open = false; };
  disclosure.addEventListener('pointerenter', e => {
    if (e.pointerType === 'mouse' && matchMedia('(hover: hover)').matches) disclosure.open = true;
  });
  disclosure.addEventListener('pointerleave', () => {
    if (!pinned) disclosure.open = false;
  });
  trigger.addEventListener('click', e => {
    e.preventDefault();
    pinned = !pinned;
    disclosure.open = pinned;
  });
  document.addEventListener('click', e => {
    if (!disclosure.contains(e.target)) close();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && disclosure.open) {
      const inside = disclosure.contains(document.activeElement);
      close();
      if (inside) trigger.focus();
    }
  });
})();
