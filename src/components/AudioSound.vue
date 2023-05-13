<template>
  <teleport to="body">
    <div class="audio-sound" />
  </teleport>
</template>

<script setup>
import {ref, onMounted, defineProps, watch, onUnmounted, defineEmits, defineExpose} from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  action: {
    type: Boolean,
    default: false
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

const audioRef = ref(null)
const durationInMinutes = ref(props.duration * 60)

let loopInterval
let pauseTimeout

const setLoop = () => {
  if (audioRef.value && audioRef.value.currentTime >= audioRef.value.duration) {
    audioRef.value.play()
  }
}

const updateDurationInMinutes = () => {
  durationInMinutes.value = props.duration * 60
}

const played = () => {
  if (!audioRef.value) return

  audioRef.value.src = props.src
  audioRef.value.play()
}

const ended = () => {
  if (!audioRef.value) return

  audioRef.value.pause()
  audioRef.value.currentTime = 0

  clearTimeout(pauseTimeout)
  clearInterval(loopInterval)
}

const graduallySound = () => {
  // Gradually reduce the volume over 2 seconds
  const fadeOutDuration = 1000 // milliseconds
  const stepInterval = 50 // milliseconds
  const step = audioRef.value.volume * stepInterval / fadeOutDuration

  const volumeInterval = setInterval(() => {
    audioRef.value.volume = Math.max(0, audioRef.value.volume - step)
    if (audioRef.value.volume <= 0) {
      clearInterval(volumeInterval)
      ended()
      emit('ended')
    }
  }, stepInterval)
}

onMounted(() => {
  audioRef.value = new Audio()

  if (props.duration) {
    loopInterval = setInterval(setLoop, 100)

    pauseTimeout = setTimeout(() => {
      graduallySound()
    }, durationInMinutes.value * 1000)
  }

  if (props.action) {
    played()
  }
})

onUnmounted(() => {
  clearInterval(loopInterval)
  clearTimeout(pauseTimeout)
})

watch(() => props.action, (value) => {
  if (value) {
    played()
  } else {
    ended()
  }
})

watch(() => props.duration, (newDuration, oldDuration) => {
  if (newDuration < oldDuration) {
    pauseTimeout = setTimeout(() => {
      graduallySound()
    }, newDuration * 60 * 1000)
  }

  updateDurationInMinutes()
})
</script>
