<template>
  <teleport to="body">
    <transition-group name="fade">
      <div v-if="modalActive" class="modal" :class="className">
        <div class="modal__wrap"
             v-bind:style="{'width': width +'px', 'height': height + 'px'}">
          <div class="content" v-bind:style="{'width': width +'px', 'height':height + 'px'}">
            <div class="desc">
              <slot name="header"></slot>
            </div>

            <div class="controls">
              <div class="slick-dots">
                <slot name="body"></slot>
              </div>

              <div class="slick-control">
                <slot name="footer"></slot>
              </div>
            </div>
          </div>

          <button @click="handleCloseModal" class="btn-close">
            <img src="@/assets/images/btn_close.png" alt="">
          </button>
        </div>

        <div class="overlay" :style="overlayStyle">
          <div :class="tutorialStep !== 1 ? 'highlight' : null"></div>
        </div>
      </div>
    </transition-group>
  </teleport>
</template>

<script setup>
import {defineProps, defineEmits, computed} from 'vue'

const props = defineProps({
  className: {type: String},
  stopEvent: {type: Boolean, default: false},
  modalActive: {type: Boolean},
  tutorialStep: {type: Number, default: 1},
  slides: {type: Array},
  width: {type: Number, default: 310},
  height: {type: Number, default: 230}
});

const emit = defineEmits(["closeModal", "addBlock"]);

const handleCloseModal = () => {
  emit("closeModal", false);
};

const overlayStyle = computed(() => {
  const index = props.slides.findIndex(slide => slide.id === props.tutorialStep)

  if (index) {
    const targetEl = document.querySelector(props.slides[index].target)
    const navMenuEl = document.querySelector('.nav-menu')

    if (targetEl && navMenuEl) {
      const { left, top } = targetEl.getBoundingClientRect()

      const posX = targetEl.clientWidth / 2 + left
      const posY = targetEl.clientHeight / 2 + top

      return {
        left: `${posX}px`,
        top: `${posY}px`,
        width: `${navMenuEl.clientHeight + 20}px`,
        height: `${navMenuEl.clientHeight + 20}px`,
      }
    }
  }

  return {
    zIndex: 3,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    overflow: 'hidden',
  }
})

</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  position: relative;

  &__wrap {
    position: absolute;
    z-index: 5;
    bottom: 14vh;
  }

  .overlay {
    position: fixed;
    z-index: 4;

    .highlight {
      position: absolute;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
      background-color: transparent;
      transform: translate(-50%, -50%);
    }
  }

  .content {
    background-color: rgba(#fff, 0.3);
    border-radius: 10px;
    z-index: 8;
    position: relative;
    display: flex;
    flex-direction: column;

    .desc {
      display: flex;
      align-items: end;
      justify-content: center;
      position: relative;
      width: 100%;
      height: 50%;

      p {
        margin: 0;
      }
    }

    .controls {
      width: 100%;
      height: 50%;

      .slick-dots {
        position: absolute;
        bottom: 35%;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
      }

      .slick-control {
        position: absolute;
        bottom: 15px;
        left: 0;
        display: flex;
        justify-content: end;
        width: 100%;
        margin: 0 -10px;
      }
    }
  }
}

.btn-close {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -15px;
  right: -15px;
  z-index: 9;
  width: calc(63px / 2);
  height: calc(63px / 2);

  img {
    width: calc(63px / 2);
    height: calc(63px / 2);
  }
}
</style>
