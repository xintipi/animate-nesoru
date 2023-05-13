<template>
  <div class="container body__bg">
    <div class="nc__main">
      <div class="nc__wrap">
        <div class="nc__img">
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <img src="@/assets/images/img_takibidai.png" alt="img_takibidai" class=" img img__takibidai">
        </div>
      </div>

      <img src="@/assets/images/arrow2.png" alt="img_arrow" class="img img__arrow">

      <router-link to="/light-fire-setcraft">
        <img src="@/assets/images/img_fuel.png" alt="img_fuel" class="img img__fuel">
      </router-link>
      <p>焚き火台の上にドロップ</p>
    </div>


  </div>
</template>
<script setup>

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
    align-content: center;
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
    height: calc(600px / 2);
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
    animation: crescendo 2.5s alternate infinite cubic-bezier(0.1, 0.2, 0.3, 0.4);
    transition: all .3s cubic-bezier(0.1, 0.2, 0.3, 0.4);

  }

  &__takibidai {
    width: calc(400px / 2);
    height: calc(400px / 2);
    margin: calc(100px / 2) auto calc(80px / 2);
  }

  &__arrow {
    width: calc(128px / 2);
    height: calc(186px / 2);
    margin: 0 auto;
  }

  &__fuel {
    width: calc(373px / 2);
    height: calc(373px / 2);
    margin: calc(20px / 2) auto calc(20px / 2);

  }
}

@keyframes crescendo {
  0% {
    transform: scale(.9);
  }
  100% {
    transform: scale(1.01);
  }
}

</style>
