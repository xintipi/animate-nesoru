<template>
  <div class="container body__bg">
    <div class="nc__main">
      <div class="nc__wrap">
        <div class="nc__img">
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <img src="@/assets/images/img_takibidai.png" alt="img_takibidai" class=" img img__takibidai">
          <img src="@/assets/images/img_fuel.png" alt="img_fuel" class="img img__fuel">
        </div>

      </div>

      <PaperCraft class="paper-craft" alt="paper-craft"/>

      <p>焚き火台の上に<br/> 作ったペーパークラフトをセット</p>

      <base-button @clicked-btn="router.push('/light-fire-ignited')" :width="widthBtn" :height="heightBtn" label="セット完了"/>

    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import PaperCraft from "@/components/PaperCraft.vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const widthBtn = ref(380 / 2);
const heightBtn = ref(100 / 2);

</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  overflow: hidden;
}

.body__bg {
  background-image: url(@/assets/images/bg_kareha.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;

  }
}

.nc {
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    z-index: 2;

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
    height: calc(640px / 2);
    margin: calc(32px / 2) auto calc(55px / 2);

  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: calc(620px / 2);
    height: calc(620px / 2);
    margin: calc(40px / 2) auto calc(55px / 2);
    z-index: 3;

    &::after {
      content: "";
      background: rgba(#fff, 0.49);
      width: calc(620px / 2);
      height: calc(620px / 2);
    }
  }
}

.img {
  width: 100%;
  height: auto;
  object-fit: cover;

  &__bonfiresheet{
    width: calc(620px / 2);
    height: calc(620px / 2);
    position: absolute;
    z-index: 3;
  }

  &__takibidai {
    width: calc(400px / 2);
    height: calc(400px / 2);
    position: absolute;
    z-index: 6;
  }

  &__fuel {
    width: calc(373px / 2);
    height: calc(373px / 2);
    position: absolute;
    z-index: 9;
  }

  &__craft {
    width: calc(120px / 2);
    height: auto;
    margin: 0 auto calc(12px / 2);
  }

  &__shape {
    width: calc(195px / 2);
    height: calc(23px / 2);
    margin: 0 auto calc(43px / 2);
  }

  &__arrow-down {
    width: calc(32px / 2);
    height: calc(46px / 2);
    margin: 0 auto calc(4px / 2);
  }
}

</style>
