<template>
  <div class="exit bg__exit">
    <div class="exit__main">
      <div class="overlay"/>

      <div class="exit__wrap">
        <div class="exit__img">
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <img src="@/assets/images/img_takibidai.png" alt="takibidai" class=" img img__takibidai">
        </div>
      </div>

      <p class="exit__inform">Have a good tomorrow.</p>

      <div class="exit__footer">
        <base-button @clicked-btn="router.push('/top')" :width="Number(widthBtn)" :height="Number(heightBtn)"
                     label="TOPへ"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import {useRouter} from 'vue-router';

const router = useRouter();
const widthBtn = ref(380 / 2);
const heightBtn = ref(100 / 2);

</script>
<style lang="scss" scoped>
.exit {
  margin: 0 auto;
  overflow: hidden;
}

.bg__exit {
  background-image: url(@/assets/images/bg_kareha.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.exit {
  &__main {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      z-index: 4;
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__inform {
    z-index: 5;
    font-size: 1.75rem;
    margin: 0;
    position: absolute;
    bottom: calc(100% - (100% * 3) / 4);
  }

  &__footer {
    position: absolute;
    bottom: 0;
    z-index: 5;
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 300px;
    z-index: 3;

    .img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;

      &__takibidai {
        position: absolute;
        z-index: 0;
        width: calc(100% * 0.7);
        height: calc(100% * 0.7);
      }
    }
  }
}
</style>
