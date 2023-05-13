<template>
  <div class="video-wrapper">

    <img @click="router.push('/top')" src="@/assets/images/btn_back.png" alt="back" class="btn-back">

    <video
      ref="video"
      class="video-player"
      @click="togglePlayPause"
      @loadedmetadata="getDuration"
      @timeupdate="onTimeUpdate"
      @ended="onEnded"
      preload="metadata"
      playsinline>
      <source src="/video/demo.mp4#t=0.01" type="video/mp4">
    </video>

    <div class="description">
      <p>
        まずは型紙の切り取り線に沿って<br/>
        カッターでカットしていきます
      </p>
    </div>

    <div class="progress-bar">
      <div class="bar" />
      <div class="progress-bar-fill" :style="{ 'width': progress + '%' }"></div>
    </div>

    <div @click="togglePlayPause" class="play-pause-btn">
      <i v-show="!isPlaying" :class="{ hide: !showIcon }" class="icon play" />
      <i v-show="isPlaying" :class="{ hide: !showIcon }" class="icon pause" />
    </div>

  </div>
</template>

<script setup>
import {ref, watch, computed, onUnmounted} from 'vue'
import { useRouter } from "vue-router";

const video = ref(null)
const duration = ref(0)
const currentTime = ref(0)
const isPlaying = ref(undefined)
const showIcon = ref(true)

const router = useRouter()

let showIconTimeout = null

watch(isPlaying, (newVal) => {
  showIcon.value = true
  if (newVal) {
    showIconTimeout = setTimeout(() => {
      showIcon.value = false
    }, 2000)
  }
})

onUnmounted(() => {
  clearTimeout(showIconTimeout)
})

const getDuration = () => {
  duration.value = video.value.duration
}

const onTimeUpdate = () => {
  if (video.value && video.value.currentTime) {
    currentTime.value = video.value.currentTime
  }
}

const togglePlayPause = () => {
  if (isPlaying.value) {
    video.value.pause()
    isPlaying.value = false
  } else {
    video.value.play()
    isPlaying.value = true
  }
}

const onEnded = () => {
  isPlaying.value = false
}

const progress = computed(() => {
  return currentTime.value / duration.value * 100
})
</script>

<style scoped lang="scss">
.video-wrapper {
  position: relative;

  .video-player {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }

  .btn-back {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    height: 40px;
  }

  .description {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);

    p {
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 999;

    .bar {
      height: 5px;
      width: 100%;
      background-color: #969281;
    }

    .progress-bar-fill {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 5px;
      width: 0;
      background-color: #ffffff;
    }
  }

  .play-pause-btn {
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: calc(150px / 2);
      height: calc(150px / 2);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 1;
      transition: opacity 0.5s ease-out;

      &.play {
        background-image: url("@/assets/images/btn_play.png");
      }

      &.pause {
        background-image: url("@/assets/images/btn_pause.png");
      }

      &.hide {
        opacity: 0;
      }
    }
  }
}
</style>
