export const TouchMove = (element) => {
  element.addEventListener('touchmove', (event) => {
    event.preventDefault();

    let left = event.touches[0].pageX;
    let top = event.touches[0].pageY;

    const targetWidth = element.offsetWidth;
    const targetHeight = element.offsetHeight;

    const touchPointLeft = left - targetWidth / 2;
    const touchPointTop = top - targetHeight / 2;

    element.style.position = 'absolute';
    element.style.left = touchPointLeft + 'px';
    element.style.top = touchPointTop + 'px';
  });
};
