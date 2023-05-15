<template>
  <div class="container" ref="container">
    <div class="attach">
      <img src="@/assets/images/img_takibidai.png" alt="grill" class="common grill" ref="grillRef"/>
      <img src="@/assets/images/img_sumi.png" alt="pots" class="common extinguisher-pots" ref="potsRef"/>
    </div>
    <img src="@/assets/images/img_tsubo.png" class="image coal" alt="coal" ref="coalRef"/>
    <img src="@/assets/images/img_tsubo2.png" class="image sub-coal" alt="sub-coal"/>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue';

import { useRouter } from "vue-router";

const container = ref(null);
const grillRef = ref(null)
const potsRef = ref(null);
const coalRef = ref(null);

const state = reactive({
  translateY: 0,
  direction: 1
});

const router = useRouter();

const switchPage = () => {
  setTimeout(() => {
    router.push('/top')
  }, 2000)
}

const animateDown = (speed) => {
  const grillRect = grillRef.value && grillRef.value.getBoundingClientRect();
  const potsRect = potsRef.value && potsRef.value.getBoundingClientRect();
  const coalRect = coalRef.value && coalRef.value.getBoundingClientRect();

  if (grillRect && potsRect && coalRect) {
    if (potsRect.bottom >= coalRect.bottom || potsRect.bottom >= coalRect.bottom - 100) {
      state.direction = 0
      potsRef.value.style.transition = 'transform 0s ease-out'
      potsRef.value.style.transform = `translate(-50%, ${coalRect.top - grillRect.top - 50}px)`
      switchPage()
      return
    }

    const distance = coalRect.bottom - (potsRect.top + potsRect.height / 2);

    const ratio = distance / speed;
    state.translateY += ratio * state.direction;

    potsRef.value.style.transform = `translateY(${state.translateY}px)`;

    if (state.direction !== 0) {
      requestAnimationFrame(() => animateDown(speed));
    }
  }
}

onMounted(() => {
  setTimeout(() => {
    const potsRect = potsRef.value?.getBoundingClientRect();
    const coalRect = coalRef.value?.getBoundingClientRect();

    const distance = coalRect?.bottom - (potsRect.top + potsRect.height / 2) - 50;
    const speed = distance / 2000;

    animateDown(speed);
  }, 1500);
});
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: black;
  display: flex;
  justify-content: center;
}

.image {
  position: absolute;
  bottom: 0;
}

.attach {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.common {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: transform 5s ease-in-out;
}

.extinguisher-pots {
  width: 150px;
  height: 150px;
  z-index: 2;
}

.coal {
  width: calc(100% - 50px);
  z-index: 1;
}

.sub-coal {
  width: calc(100% - 50px);
  z-index: 3;
}

.grill {
  width: 200px;
  height: 200px;
}
</style>
