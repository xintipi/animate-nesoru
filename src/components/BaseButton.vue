<template>
  <div>
    <button
      @click="handleClick"
      class="normal-btn"
      :style="{ 
        'width': width + 'px', 
        'height': height + 'px',
        'margin': margin + 'px'
      }">
      {{ label }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 60,
  },
  label: {
    type: String,
    default: '',
  },
  margin: {
    type: Number,
    default: 18,
  }
})

const emit = defineEmits(['clicked-btn'])

const handleClick = () => {
  emit('clicked-btn')
}

</script>

<style scoped>
.normal-btn {
  border: 0;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;
  margin: 18px;
  font-weight: 600;
  background-color: #aa9b78;
  box-shadow: 0 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
