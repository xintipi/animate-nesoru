import { ref } from 'vue';

export const useDragDrop = () => {
  const drop = ref(null);
  const drag = ref(null);
  const result = ref('')

  const initDragOffset = {
    left: 0,
    top: 0,
  };

  const onLoad = () => {
    initDragOffset.left = drag.value.getBoundingClientRect().left;
    initDragOffset.top = drag.value.getBoundingClientRect().top;
  };

  const onTouchEnd = (event) => {
    const dropLeft = drop.value.getBoundingClientRect().left;
    const dropRight = drop.value.getBoundingClientRect().right;
    const dropBottom = drop.value.getBoundingClientRect().bottom;
    const dropTop = drop.value.getBoundingClientRect().top;

    let touchX = event.changedTouches[0].pageX;
    let TouchY = event.changedTouches[0].pageY;

    const dragCenterLeft = drag.value.clientWidth / 2;
    const dragCenterTop = drag.value.clientHeight / 2;

    const dropCenterLeft = drop.value.clientWidth / 2;
    const dropCenterTop = drop.value.clientHeight / 2;

    if (
      touchX > dropLeft &&
      touchX < dropRight &&
      TouchY < dropBottom &&
      TouchY > dropTop
    ) {
      result.value = 'in';
      drag.value.style.left = dropLeft + dropCenterLeft - dragCenterLeft + 'px';
      drag.value.style.top = dropTop + dropCenterTop - dragCenterTop + 'px';
      drag.value.classList.add('dropped');
    } else {
      result.value = 'out';
      drag.value.style.left = initDragOffset.left + 'px';
      drag.value.style.top = initDragOffset.top + 'px';
    }
  };

  return {
    result,
    drop,
    drag,
    onLoad,
    onTouchEnd,
  };
};
