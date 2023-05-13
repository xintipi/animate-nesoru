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

const played = () => {
  if (!videoRef.value) return

  videoRef.value.src = props.src
  videoRef.value.play()
}

const ended = () => {
  if (!videoRef.value) return

  videoRef.value.pause()
  videoRef.value.currentTime = 0

  clearTimeout(pauseTimeout)
  clearInterval(loopInterval)
}

const setLoop = () => {
  const video = videoRef.value
  if (video && video.currentTime >= video.duration) {
    video.play()
  }
}

const updateDurationInMinutes = () => {
  durationInMinutes.value = props.duration * 60
}

const graduallyVideo = () => {
  const video = videoRef.value
  if (!video) return

  const totalSteps = 1000 // miliseconds
  let count = 0

  const slowVideoStep = () => {
    if (count >= totalSteps) {
      ended()
      emit('ended')
      return
    }

    const step = count / totalSteps
    video.playbackRate = Math.abs(1 - (step / 5))

    count++

    if (video.currentTime >= video.duration) {
      video.currentTime = 0
    }

    requestAnimationFrame(slowVideoStep)
  }

  requestAnimationFrame(slowVideoStep)
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
