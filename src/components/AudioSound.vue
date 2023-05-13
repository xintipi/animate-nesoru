<template>
  <teleport to="body">
    <audio ref="audioRef" :autoplay="props.autoPlay">
      <source :src="props.src" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </teleport>
</template>

<script setup>
import {ref, onMounted, defineProps, watch, onUnmounted, defineEmits, defineExpose} from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  autoPlay: {
    type: Boolean,
    default: false
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
  played: () => played(),
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
  audioRef.value.play()
}

const ended = () => {
  audioRef.value.pause()
  audioRef.value.currentTime = 0
  clearTimeout(pauseTimeout)
  clearInterval(loopInterval)
}

const graduallySound = () => {
  // Gradually reduce the volume over 1 seconds
  const fadeOutDuration = 1000
  const stepInterval = 20
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
  Audio.prototype.play = ((play) => {
    return function () {
      const audio = this,
        args = arguments,
        promise = play.apply(audio, args);
      if (promise) {
        promise.catch(() => {
          // Autoplay was prevented. This is optional, but add a button to start playing.
          const el = document.createElement('button');
          el.innerHTML = 'Play';
          el.addEventListener('click', function () {
            play.apply(audio, args);
          });
          this.parentNode.insertBefore(el, this.nextSibling)
        });
      }
    };
  })(Audio.prototype.play);

  if (props.duration) {
    loopInterval = setInterval(setLoop, 100)

    pauseTimeout = setTimeout(() => {
      graduallySound()
    }, durationInMinutes.value * 1000)
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
