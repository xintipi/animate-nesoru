<template>
  <div class="w-100">
    <img class="drop" ref="drop" src="@/assets/images/img_takibidai.png" alt="image" />

    <img
      v-touch-move
      @load="onLoad"
      class="drag"
      ref="drag"
      src="@/assets/images/img_fuel.png"
      alt="fuel image"
      @touchend="onTouchEnd($event)"
    />
  </div>
</template>

<script setup>
import { useDragDrop } from '@/composables/useDragDrop';

const { drag, drop, onLoad, onTouchEnd } = useDragDrop();
</script>

<style lang="scss" scoped>
.w-100 {
  background: url(@/assets/images/bg1.png) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}

.drop {
  width: 250px;
}

.drag {
  width: 200px;
}
</style>
