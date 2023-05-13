<template>
  <div class="w-100">
    <WoodDrag @drop="onDrop" />
  </div>
</template>

<script setup>
import WoodDrag from '@/components/WoodDrag.vue';

const onDrop = () => {
  console.log('drop');
};
</script>

<style lang="scss" scoped>
.w-100 {
  background: url(@/assets/images/bg1.png) no-repeat center center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
}
</style>
