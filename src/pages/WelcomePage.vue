<template>
  <div class="welcome-page">
    <div class="btn-group">
      <base-button @clicked-btn="router.push('/sound-alert')" :label="'noseru craftをはじめる'"/>
      <base-button :label="'作り方を見る（動画）'"/>
    </div>

  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped>
.welcome-page {
  background-color: #031718;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
