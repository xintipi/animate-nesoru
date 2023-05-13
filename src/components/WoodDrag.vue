<template>
  <div class="wrapper">
    <div ref="drop" class="drop-zone">
      <p>薪をここにドロップ</p>
    </div>

    <button class="close-btn" @click="onClose">
      もどる
      <img src="@/assets/images/btn_close.png" alt="close"/>
    </button>

    <img
      v-touch-move
      @touchend="
        onTouchEnd($event);
        onDrop();
      "
      @load="onLoad"
      ref="drag"
      src="@/assets/images/img_firewood.png"
      alt="fire wood"
    />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import { useDragDrop } from '@/composables/useDragDrop';

const { drag, drop, onLoad, onTouchEnd } = useDragDrop();

const emit = defineEmits(['close', 'drop']);

const onClose = () => {
  emit('close');
};

const onDrop = () => {
  setTimeout(() => {
    emit('drop');
  }, 1000);
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 225px;

  .drop-zone {
    height: 225px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-end;
    justify-content: center;

    p {
      color: #ffffff;
      margin-bottom: 44px;
      font-size: 18px;
    }
  }

  .close-btn {
    display: flex;
    border: 2px solid #ffffff80;
    background-color: #000;
    border-radius: 4vw;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: #fff;
    padding: 0;
    justify-content: center;
    align-items: center;
    line-height: 1;
    margin-left: 50.6vw;
    margin-top: -10px;

    img {
      width: 31px;
    }
  }

  & > img {
    width: 134px;

    &.dropped {
      animation: zoomOut 1s ease-in-out forwards;
    }
  }

  @keyframes zoomOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    100% {
      opacity: 0;
    }
  }
}
</style>
