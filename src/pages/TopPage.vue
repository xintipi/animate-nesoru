<template>
  <div class="top">
    <img class="logo-img blur" width="182" height="148" :src="logoSrc" alt="logo">

    <div class="btn-group">
      <base-button
        v-for="(button, index) in topMenu" :key="index" class="btn fade-in"
        @clicked-btn="router.push(button.route)"
        :label="button.label"
        :width="259"
        :height="50"
        :margin="5"
      />
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
  background-image: url('@/assets/images/bg1.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: baseline;

  .logo-img {
    position: absolute;
    top: 115px;

    &.blur {
      filter: blur(10px);
      animation: blurChange 3s ease-in-out forwards;
    }
  }

  .btn-group {
    position: absolute;
    bottom: calc((100% * 0.12) - 20px);

    .fade-in {
      opacity: 0;
      animation: fadeIn 2s ease-in forwards;
    }

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

/* Define the keyframe */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
   from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes blurChange {
  0% {
    filter: blur(10px);
  }

  50% {
    filter: blur(5px);
  }

  100% {
    filter: blur(0px);
  }
}

@-webkit-keyframes blurChange {
  0% {
    filter: blur(10px);
  }

  50% {
    filter: blur(5px);
  }

  100% {
    filter: blur(0px);
  }
}

@-moz-keyframes blurChange {
  0% {
    filter: blur(10px);
  }

  50% {
    filter: blur(5px);
  }

  100% {
    filter: blur(0px);
  }
}
</style>
