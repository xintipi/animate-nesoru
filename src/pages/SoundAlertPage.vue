<template>
  <div class="sound-alert">
    <div class="sound-alert-modal">
      <img class="sound-img" src="../assets/images/sound.png" alt="sound" style="width: 80px; height: 54px">
      <p class="sound-alert-info">
        このコンテンツは音が出ます<br />
        スマートフォンのミュートを解除し <br />
        お楽しみください
      </p>
      <button @click="router.push('/top')" class="ok-btn">OK</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped lang="scss">
.sound-alert {
  background-color: #031718;
  display: flex;
  align-items: center;
  justify-content: center;

  .sound-alert-modal {
    width: 310px;
    height: 265px;
    background-color: #4e5c5d;
    border: 0;
    border-radius: 20px;

    .sound-img {
      margin-top: 20px;
    }
    .sound-alert-info {
      margin: 30px 20px;
    }

    .ok-btn {
      width: 135px;
      height: 45px;
      border: 0;
      border-radius: 10px;
      color: #ffffff;
      background-color: #aa9b78;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>
