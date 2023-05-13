<template>
  <div class="w-100">
    <img class="drop" ref="drop" src="@/assets/images/img_takibidai.png" alt="image" />

    <PaperCraft class="mb-15px" />
  </div>
</template>

<script setup>
import PaperCraft from '@/components/PaperCraft.vue';
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

.mb-15px {
  margin-bottom: 15px;
}

.drop {
  width: 250px;
}
</style>
