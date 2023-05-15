<template>
  <teleport to="body">
    <div v-if="modalActive" class="modal" :class="className">
      <div class="modal__wrap"
           v-bind:style="{'width': width +'px', 'height': height + 'px'}">
        <div class="content" v-bind:style="{'width': width +'px', 'height':height + 'px'}">
          <div class="desc">
            <slot name="header"></slot>
          </div>

          <div class="controls">
            <div class="slick-control">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>

        <button @click="emit('update:modalActive', false)" class="btn-close">
          <img src="@/assets/images/btn_close.png" alt="">
        </button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
  className: {type: String},
  modalActive: {type: Boolean},
  width: {type: Number, default: 310},
  height: {type: Number, default: 230}
});

const emit = defineEmits(['update:modalActive']);

</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  position: relative;

  &__wrap {
    position: absolute;
    z-index: 5;
    bottom: 10vh;
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
      align-items: flex-end;
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

      .slick-control {
        position: absolute;
        bottom: 15px;
        left: 0;
        display: flex;
        justify-content: center;
        width: 100%;
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
