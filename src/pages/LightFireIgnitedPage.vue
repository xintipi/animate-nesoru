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

      <div class="nc__matchbox">
        <img class="img img__matchbox" src="@/assets/images/matchbox.png" alt="img__matchbox"/>
        <img class="img img__matchstick" src="@/assets/images/img_matchstick1.png" alt="img__matchstick"/>
      </div>

      <div class="nc__content" @click="redirectToPage">
        <img src="@/assets/images/arrow2.png" alt="img_arrow" class="img img__arrow-up">
        <p>スワイプして火をつける</p>
        <img src="@/assets/images/arrow2.png" alt="img_arrow" class="img img__arrow-up">
      </div>

    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToPage=()=>{
  router.push('/light-fire-ignited-1');
}
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
}

.nc {
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
    margin: calc(32px / 2) auto calc(55px / 2);
    z-index: 3;
  }

  &__matchbox {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto calc(120px / 2);

  }

  &__content {
    background: rgba(#E2AA4F, 0.4);
    box-shadow: 0px 3px 6px #00000029;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: calc(150px / 2);
    z-index: 99;
    padding: 0 calc(61px / 2);
  }
}

.img {
  width: 100%;
  height: auto;
  object-fit: cover;

  &__bonfiresheet {
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

  &__matchbox {
    width: calc(217px / 2);
    height: calc(459px / 2);
    margin: 0 auto calc(20px / 2);
  }

  &__matchstick {
    position: absolute;
    left: calc(50% - 5px);
    top: 70%;
    z-index: 9;
    width: calc(394px / 2);
    height: calc(390px / 2);
  }


  &__arrow-up {
    width: calc(64px / 2);
    height: calc(94px / 2);

    &:first-child {
      margin-left: 10px;
    }
    &:last-child {
      margin-right: 10px;
    }
  }
}

</style>
