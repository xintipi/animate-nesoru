<template>
  <div class="container body__bg">
    <div class="nc__main">
      <div class="nc__wrap">
        <div class="nc__img">
          <div class="nc__bg"></div>
          <img src="@/assets/images/bonfiresheet.png" alt="img_bonfiresheet" class=" img img__bonfiresheet">
          <div class="nc__video">
            <video width="200" height="200" controls autoplay>
              <source
                src="https://vod-progressive.akamaized.net/exp=1683784183~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4577%2F11%2F297888040%2F1135624254.mp4~hmac=be36dccd4482192d30a230a2f9fb7f05f2af4a106633d88980bd56affd02e563/vimeo-prod-skyfire-std-us/01/4577/11/297888040/1135624254.mp4"
                type="video/mp4">
            </video>
          </div>
        </div>
      </div>
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
  position: relative;

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;

  }
}

.nc {
  &__bg{
    box-shadow: rgba(255, 215, 0, 0.3) 0px 8px 124px, rgba(247, 157, 3, 0.3) 0px 16px 156px, rgba(226, 88, 34, 0.3) 0px 24px 164px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    width: calc(580px / 2);
    height: calc(580px / 2);
  }
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

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
    border: none;
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

  &__video {
    aspect-ratio: 1/1;
    box-shadow: rgba(255, 215, 0, 0.3) 0px 8px 124px, rgba(247, 157, 3, 0.3) 0px 16px 156px, rgba(226, 88, 34, 0.3) 0px 24px 164px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: calc(400px / 2);
    height: calc(400px / 2);
    z-index: 6;

    video {
      display: block;
      min-height: 100%;
      position: absolute;
      top: 50%;
      margin-top: -50%;
    }
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
}

</style>
