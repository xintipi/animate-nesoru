<template>
  <video ref="videoRef" class="video" preload="metadata" :controls="false" :muted="true" playsinline/>
</template>

<script setup>
import {defineEmits, defineProps, defineExpose, onMounted, onUnmounted, ref, watch} from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['ended'])

defineExpose({
  ended: () => ended()
})

const videoRef = ref(null)
const durationInMinutes = ref(props.duration * 60)

let loopInterval
let pauseTimeout

const setLoop = () => {
  const video = videoRef.value
  const currentTime = video.currentTime
  const buffer = .44

  if (video && currentTime >= video.duration - buffer) {
    video.currentTime = 0
    video.play()
  }
}

const updateDurationInMinutes = () => {
  durationInMinutes.value = props.duration * 60
}

const played = () => {
  const video = videoRef.value
  if (!video) return

  video.src = props.src
  video.play()
}

const ended = () => {
  const video = videoRef.value
  if (!video) return

  video.pause()
  video.currentTime = 0

  clearTimeout(pauseTimeout)
  clearInterval(loopInterval)
}

// create function: gradually playbackRate slow in 1 seconds
const graduallyVideo = () => {
  const video = videoRef.value
  const step = 0.44
  const interval = 1000

  const intervalId = setInterval(() => {
    if (video.playbackRate > step) {
      video.playbackRate -= step
    } else {
      video.playbackRate = 0

      if (!video.ended) {
        ended()
      }

      clearTimeout(pauseTimeout)
      clearInterval(loopInterval)
      clearInterval(intervalId)

      emit('ended')
    }
  }, interval)
}

onMounted(() => {
  loopInterval = setInterval(setLoop, 100)

  pauseTimeout = setTimeout(() => {
    graduallyVideo()
  }, durationInMinutes.value * 1000)

  played()
})

onUnmounted(() => {
  clearInterval(loopInterval)
  clearTimeout(pauseTimeout)
})

watch(() => props.duration, (newDuration, oldDuration) => {
  if (newDuration < oldDuration) {

    pauseTimeout = setTimeout(() => {
      graduallyVideo()
    }, newDuration * 60 * 1000)
  }

  updateDurationInMinutes()
})
</script>

<style lang="scss" scoped>
.video {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
