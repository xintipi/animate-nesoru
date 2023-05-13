<template>
  <div class="top">
    <img class="logo-img" width="182" height="148" :src="logoSrc" alt="logo">

    <div class="btn-group">
      <div v-for="(button, index) in topMenu" :key="index" class="btn">
        <base-button
          @clicked-btn="router.push(button.route)"
          :label="button.label"
          :width="259"
          :height="50"
          :margin="5"
        />
        <p class="note">{{ button.note }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { topMenu } from "@/mocks/top-menu";
import { useRouter } from 'vue-router'

const logoSrc = require('@/assets/images/logo.png')
const router = useRouter()
</script>

<style scoped lang="scss">
.top {
  background-image: url("@/assets/images/bg1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: baseline;

  .logo-img {
    position: absolute;
    top: 115px;
  }

  .btn-group {
    position: absolute;
    bottom: calc((100% * 0.12) - 20px);

    .btn {
      &:nth-child(2) {
        margin-top: 20px;
      }
      .note {
        font-size: 13px;
        font-weight: 600;
        margin: 0;
      }
    }
  }
}
</style>
