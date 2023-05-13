<template>
  <div class="fuel-page">
    <div class="overlay" />

    <div class="fuel-page__img">
      <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
      <img class="img img__firestand" ref="drop" src="@/assets/images/img_firestand.png" alt="fire stand" />
    </div>

    <transition name="fade">
      <div v-show="!isTouchEnd" class="fuel-page__arrow">
        <img src="@/assets/images/arrow2.png" class="arrow" alt="arrow">
      </div>
    </transition>

   <div class="fuel-page__footer">
     <img
       v-touch-move
       @load="onLoad"
       class="fuel"
       ref="drag"
       src="@/assets/images/img_fuel.png"
       alt="fuel image"
       @touchend="onTouchImage"
     />
     <p>焚き火台の上にドロップ</p>
   </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useDragDrop } from '@/composables/useDragDrop';
import {useRouter} from "vue-router";

const { result, drag, drop, onLoad, onTouchEnd } = useDragDrop();

const isTouchEnd = ref(false)

const router = useRouter()

const onTouchImage = (evt) => {
  onTouchEnd(evt)
  isTouchEnd.value = result.value === 'in';
  isTouchEnd.value && setTimeout(() => {
    router.push('/set-craft')
  }, 1000)
}
</script>

<style lang="scss" scoped>
.fuel-page {
  background-image: url(@/assets/images/bg_kareha.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
    z-index: 1;
  }

  &__img {
    position: relative;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    max-height: 300px;

    .img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;

      &__bonfiresheet {
        z-index: 0;
      }

      &__firestand {
        width: calc(100% * 0.7);
        height: calc(100% * 0.7);
        position: absolute;
        z-index: 1;
      }
    }
  }

  &__arrow {
    position: absolute;
    top: calc(300px + 15px);
    z-index: 1;

    img {
      width: calc(100% / 2);
      animation: slideInDown 3s ease-in-out infinite;
    }
  }

  &__footer {
    z-index: 1;

    .fuel {
      width: 180px;
      height: 180px;
    }

    p {
      font-weight: 500;
      font-size: 1rem;
      margin-top: 0;
    }
  }
}

@keyframes slideInDown {
  0% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
