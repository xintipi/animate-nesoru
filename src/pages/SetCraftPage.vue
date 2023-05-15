<template>
  <div class="set-craft bg__setcraft">
    <div class="overlay"/>

    <div class="set-craft__main">
      <div class="set-craft__wrap">
        <div class="set-craft__img">
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <img src="@/assets/images/img_takibidai.png" alt="takibidai" class=" img img__takibidai">
          <img src="@/assets/images/img_fuel.png" alt="fuel" class="img img__fuel">
          <img src="@/assets/images/ani_square.png" alt="square" class="img img__square">
        </div>
      </div>

      <paper-craft class="paper-craft"/>

      <div class="set-craft__footer">
        <p>焚き火台の上に<br/> 作ったペーパークラフトをセット</p>
        <base-button @clicked-btn="router.push('/ignite')" :width="Number(widthBtn)" :height="Number(heightBtn)"
                       label="セット完了"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import PaperCraft from "@/components/PaperCraft.vue";
import {useRouter} from 'vue-router';

const router = useRouter();
const widthBtn = ref(380 / 2);
const heightBtn = ref(100 / 2);

</script>
<style lang="scss" scoped>
.set-craft {
  margin: 0 auto;
  overflow: hidden;
}

.bg__setcraft {
  background-image: url(@/assets/images/bg_kareha.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
}

.set-craft {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
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
  }

  .paper-craft {
    position: absolute;
    bottom: calc((100% - (100% * 3) / 4));
  }

  &__footer {
    position: absolute;
    bottom: 0;

    p {
      font-size: 1rem;
      font-weight: 500;
    }
  }

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    max-width: 300px;
    max-height: 300px;
    margin: auto;
    z-index: 3;

    .img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;

      &__square {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        -webkit-animation: zoom 1.5s linear infinite alternate;
        -moz-animation:    zoom 1.5s linear infinite alternate;
        -o-animation:      zoom 1.5s linear infinite alternate;
        animation:         zoom 1.5s linear infinite alternate;
      }

      &__takibidai {
        width: calc(100% * 0.7);
        height: calc(100% * 0.7);
        position: absolute;
        z-index: 0;
      }

      &__fuel {
        width: calc(100% * 0.6);
        height: calc(100% * 0.6);
        position: absolute;
        z-index: 1;
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
  }

  .btn__setcraft {
    position: absolute;
    bottom: 8px;
  }
}

@-webkit-keyframes zoom {
  0% {
    -ms-transform: scale(1, 1);
    transform: scale(1, 1) translateZ(10px);
  }
  100% {
    -ms-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8) translateZ(10px);
  }
}

@-moz-keyframes zoom {
  0% {
    -ms-transform: scale(1, 1);
    transform: scale(1, 1) translateZ(10px);
  }
  100% {
    -ms-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8) translateZ(10px);
  }
}

@-o-keyframes zoom {
  0% {
    -ms-transform: scale(1, 1);
    transform: scale(1, 1) translateZ(10px);
  }
  100% {
    -ms-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8) translateZ(10px);
  }
}

@keyframes zoom {
  0% {
    -ms-transform: scale(1, 1);
    transform: scale(1, 1) translateZ(10px);
  }
  100% {
    -ms-transform: scale(0.8, 0.8);
    transform: scale(0.8, 0.8) translateZ(10px);
  }
}

</style>
