<template>
  <div class="wrapper">
    <img
      ref="matchBox"
      class="match-box"
      src="@/assets/images/matchbox.png"
      alt="matchbox"
      @load="onLoad"
    />

    <div
      class="swipe-block"
      @touchmove="onTouchMove($event)"
      @touchend="onTouchEnd($event)"
    >
      <div class="swipe-bar">
        <div class="wrap-blur">
          <div class="blur-bg"></div>
        </div>

        <div class="top">
          <img src="@/assets/images/arrow2.png" alt="arrow" />

          <p>スワイプして火をつける</p>

          <img src="@/assets/images/arrow2.png" alt="arrow"/>
        </div>
      </div>

      <img
        class="match-stick match-stick__normal"
        src="@/assets/images/img_matchstick1.png"
        alt="matchstick"
      />
      <img
        class="match-stick match-stick__active"
        src="@/assets/images/img_matchstick2.png"
        alt="matchstick"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(['ignited']);

const props = defineProps({
  dropPoint: Number,
});

const matchBox = ref(null);
const matchFirePoint = ref(0);
const isMatchFire = ref(false);
const isIgnited = ref(false);
const minPoint = ref(window.innerHeight - 75);

const onLoad = () => {
  const matchBoxOffsetTop = matchBox.value.offsetTop;
  const matchBoxHeight = matchBox.value.clientHeight;
  matchFirePoint.value = matchBoxOffsetTop + matchBoxHeight * 0.4;
};

const onTouchEnd = (event) => {
  if (event.target.style) {
    event.target.style.top = minPoint.value + 'px';
  }
};

const onTouchMove = (event) => {
  event.preventDefault();

  if (isIgnited.value) return;

  let top = event.touches[0].pageY;

  const targetHeight = event.target.offsetHeight;

  const touchPointTop = top - targetHeight / 2;

  if (touchPointTop < minPoint.value && touchPointTop > matchFirePoint.value) {
    event.target.style.top = touchPointTop + 'px';
  } else if (touchPointTop >= minPoint.value) {
    event.target.style.top = minPoint.value + 'px';
  } else {
    if (isMatchFire.value) {
      emit('ignited');
      isIgnited.value = true;
    }

    isMatchFire.value = true;
    event.target.classList.add('active');
    minPoint.value = matchFirePoint.value;
    matchFirePoint.value = props.dropPoint;
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.match-box {
  width: 100px;
  position: absolute;
  left: calc(100% * 0.3);
  bottom: 85px;
  z-index: 4;
}

.swipe-block {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75px;
  z-index: 4;

  &.active {
    .match-stick {
      &__normal {
        opacity: 0;
      }

      &__active {
        opacity: 1;
      }
    }
  }

  .swipe-bar {
    position: relative;
    height: 100%;
    z-index: 1;
    pointer-events: none;

    .wrap-blur {
      width: 100%;
      position: absolute;
      height: 100%;
      overflow: hidden;
    }

    .top {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      height: 100%;

      img {
        width: 32px;
      }

      p {
        margin: 0 26px;
        font-weight: 500;
      }
    }

    .blur-bg {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(1px);
      background-color: rgba($color: #e2aa4f, $alpha: 0.4);
    }

    p {
      color: #ffffff;
      font-size: 18px;
    }
  }
}

.match-stick {
  width: 200px;
  position: absolute;
  left: calc(100% * 0.45);
  bottom: -70px;
  transition: 0.3s ease-in-out;
  pointer-events: none;

  &__active {
    opacity: 0;
  }
}
</style>
