<template>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="route.path" :style="{'height': setHeight + 'px', 'overflow': 'hidden'}"/>
    </transition>
  </router-view>
</template>

<script setup>
import {onMounted, ref} from "vue";

const setHeight = ref(0)

const resizeHeight = () => {
  setHeight.value = window.innerHeight
}

onMounted(() => {
  resizeHeight()
  window.addEventListener('resize', resizeHeight)
})
</script>

<style lang="scss">
@import "./assets/styles/fonts.scss";

html {
  touch-action: pan-x pan-y;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  font-family: "Noto Sans Japanese", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #031718;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
