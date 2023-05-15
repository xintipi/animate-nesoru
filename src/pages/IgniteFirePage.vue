<template>
  <div class="ignite bg__ignite">

    <div class="ignite__main">
      <div class="overlay"/>

      <div class="ignite__wrap">
        <div class="ignite__img">
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <img @load="onLoad" ref="drop" src="@/assets/images/img_firestand.png" alt="firestand"
               class=" img img__firestand">
          <img src="@/assets/images/img_fuel.png" alt="fuel" class="img img__fuel">
        </div>
      </div>
    </div>

    <ignite-fire-swipe @ignited="onIgnited" :drop-point="dropPoint"/>
  </div>
</template>

<script setup>
import IgniteFireSwipe from '@/components/IgniteFireSwipe.vue';

import {ref} from 'vue';

import {useRouter} from "vue-router";

const drop = ref(null);
const dropPoint = ref(0);

const router = useRouter()

const onIgnited = () => {
  setTimeout(() => {
    router.push('/view-bonfire')
  }, 1000);
};

const onLoad = () => {
  dropPoint.value = drop.value.offsetTop + drop.value.clientHeight * 0.7;
};
</script>

<style lang="scss" scoped>
.ignite {
  margin: 0 auto;
  overflow: hidden;
}

.bg__ignite {
  background-image: url(@/assets/images/bg_kareha.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.ignite {
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
    z-index: 1;
  }

  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    p {
      font-size: calc(36px / 2);
      line-height: calc(54px / 2);
      margin: 0;
      text-align: center;
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &__bonfiresheet {
        z-index: 0;
      }

      &__firestand {
        width: calc(100% * 0.7);
        height: calc(100% * 0.7);
        position: absolute;
        z-index: 2;
      }

      &__fuel {
        width: calc(100% * 0.6);
        height: calc(100% * 0.6);
        position: absolute;
        z-index: 2;
      }
    }
  }
}
</style>
