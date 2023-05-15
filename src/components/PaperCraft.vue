<template>
  <div class="wrapper">
    <img class="craft" src="@/assets/images/imag_craft.png" alt="craft" />

    <img class="arrow-down" src="@/assets/images/arrow.png" alt="arrow" />

    <img class="shape" src="@/assets/images/shape.png" alt="shape" />
  </div>
</template>

<script setup></script>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.craft {
  animation: slideInDown 2s ease-in-out infinite;
  width: 40px;
}

.arrow-down {
  margin: 6px 0 4px;
  width: 16px;
}

.shape {
  width: 97px;
}

@keyframes slideInDown {
  0% {
    transform: translateY(30px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(30px);
  }
}
</style>
