<template>
  <div class="view-bonfire">
    <div class="overlay"/>

    <div class="view-bonfire__wrap">
      <div class="view-bonfire__img">
        <img src="@/assets/images/bonfiresheet.png" alt="bonfiresheet" class="img img__bonfiresheet">
        <fire-video
          @ended="onEndVideo"
          :duration="durationInMinutes"
          ref="videoCampFire"
          class="img img__fire"
          src="video/fire.mp4"/>
      </div>

      <img src="@/assets/images/effect_firelight.png" alt="effectfirelight" class="view-bonfire__flare">
    </div>

    <!-- Modal ask to turn on audio camp fire -->
    <base-modal v-model:modal-active="audioActive" :width="310" :height="230">
      <template #header>
        <p class="title">引き続き音声を再生しますか？</p>
      </template>

      <template #footer>
        <div class="btn-group">
          <button @click="onTurnOnAudio" class="btn btn-yellow">はい</button>
          <button @click="onTurnOffAudio" class="btn btn-gray">いいえ</button>
        </div>
      </template>
    </base-modal>
    <!-- End modal turn on audio camp fire -->

    <!-- Modal tutorial -->
    <transition name="fade">
      <div v-if="turnOnAudio">
        <tour-guide
          v-model:modal-active="tourGuideActive"
          :tutorial-step="tutorialStep"
          :slides="slides"
          :width="310"
          :height="230">
          <template #header>
            <template v-for="slide in slides" :key="slide.id">
              <p class="title" v-show="tutorialStep === slide.id">{{ slide.content }}</p>
            </template>
          </template>

          <template #body>
            <template v-for="slide in slides" :key="slide.id">
              <span class="dots" :class="{ 'white-color' : tutorialStep === slide.id }"/>
            </template>
          </template>

          <template #footer>
            <div class="btn-group">
              <button v-if="tutorialStep > 1" @click="prevStep" class="btn btn-gray">もどる</button>
              <button @click="nextStep" class="btn btn-yellow">つぎへ</button>
            </div>
          </template>
        </tour-guide>
      </div>
    </transition>
    <!-- End modal tutorial -->

    <audio-sound src="audio/birdsong.mp3" :action="isPlayed"/>

    <audio-sound src="audio/bonfire_se_cutmix.mp3" :action="campFireAudio" :duration="durationInMinutes"/>

    <transition-group name="fade">
      <!-- bgm popup -->
      <div key="1" v-show="activeTab === 1" class="popup">
        <button @click="handleClosePopup" class="btn-close">
          <img src="@/assets/images/btn_close.png" alt="btn-close">
        </button>

        <p class="text-title">サウンド</p>
        <div class="btn-group mb-20">
          <button @click="playBirdSong" class="btn btn-yellow">ON</button>
          <button @click="endBirdSong" class="btn btn-gray">OFF</button>
        </div>
      </div>
      <!-- timer popup -->
      <div key="2" v-show="activeTab === 2" class="popup">
        <button @click="handleClosePopup" class="btn-close">
          <img src="@/assets/images/btn_close.png" alt="btn-close">
        </button>

        <p class="text-title">燃え続ける時間を選択</p>
        <ul class="time-group">
          <li v-for="timer in timers"
              :key="timer.id"
              :class="{ 'active' : durationInMinutes === timer.time }"
              @click="setTimer(timer.time)"
          >{{ timer.text }}
          </li>
        </ul>
        <div class="btn-group mb-20">
          <button style="width: 190px" class="btn btn-yellow" @click="approveTimer">タイマーセット</button>
        </div>
      </div>
      <!-- exit popup -->
      <div key="3" v-show="activeTab === 3" class="popup">
        <button @click="handleClosePopup" class="btn-close">
          <img src="@/assets/images/btn_close.png" alt="btn-close">
        </button>

        <p class="text-title">焚き火を消しますか？</p>
        <div class="btn-group mb-20">
          <button @click="nextPage" class="btn btn-yellow">はい</button>
          <button @click="handleClosePopup" class="btn btn-gray">いいえ</button>
        </div>
      </div>
    </transition-group>

    <transition-group name="fade">
      <template v-if="turnOnAudio">
        <view-bonfire-footer
          key="fire-footer"
          :active-tab="activeTab"
          :footer-items="footerNav"
          @tabClick="tabClick"/>

        <img
          key="img-footer"
          class="img-footer"
          src="@/assets/images/footer.png"
          alt="footer">
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import ViewBonfireFooter from '@/components/ViewBonfireFooter.vue'
import TourGuide from '@/components/TourGuide.vue';
import AudioSound from "@/components/AudioSound.vue";
import FireVideo from "@/components/FireVideo.vue";
import BaseModal from "@/components/BaseModal.vue";

import {slides} from "@/mocks/slides";
import {timers} from "@/mocks/timers";
import {footerNav} from "@/mocks/footer-nav";

import {onUnmounted, ref, watch} from 'vue'

import {useRouter} from "vue-router";

const router = useRouter()

const tutorialStep = ref(1)
const activeTab = ref(0)
const durationInMinutes = ref(20) // 20 minutes default

const videoCampFire = ref(null)

const isPlayed = ref(false)
const campFireAudio = ref(false)
const turnOnAudio = ref(false)
const audioActive = ref(true)

let tourGuideActive = ref(true)

let timeoutAudio = null
let timeoutSwitch = null

onUnmounted(() => {
  clearTimeout(timeoutAudio)
  clearTimeout(timeoutSwitch)
})

watch(() => audioActive.value, (value) => {
  if (!value) {
    timeoutAudio = setTimeout(() => {
      turnOnAudio.value = true
    }, 2000)
  }
})

const onTurnOnAudio = () => {
  campFireAudio.value = true
  audioActive.value = false
}

const onTurnOffAudio = () => {
  campFireAudio.value = false
  audioActive.value = false
}

const onEndVideo = () => {
  timeoutSwitch = setTimeout(() => {
    router.push('/exit1')
  }, 500)
}

const setTimer = (time) => {
  durationInMinutes.value = time
}

const approveTimer = () => {
  console.log(durationInMinutes.value, 'minutes')
  handleClosePopup()
}

const nextPage = () => {
  videoCampFire.value.ended()
  router.push('/exit1')
}

const playBirdSong = () => {
  isPlayed.value = true
}

const endBirdSong = () => {
  isPlayed.value = false
}

const nextStep = () => {
  tutorialStep.value < 4 ? tutorialStep.value++ : tourGuideActive.value = false
}

const prevStep = () => {
  tutorialStep.value--
}

const tabClick = (currentTab) => {
  if (!tourGuideActive.value) {
    activeTab.value = currentTab
  }
}

const handleClosePopup = () => {
  activeTab.value = 0
}
</script>

<style scoped lang="scss">
.view-bonfire {
  background-image: url(@/assets/images/bg_kareha.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__img {
    position: relative;
    margin: 15px auto auto;
    width: 300px;
    height: 300px;

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &__fire {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% * 0.7);
        height: calc(100% * 0.7);
        z-index: 2;
      }
    }
  }

  &__flare {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 360px;
    z-index: 1;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .8);
    overflow: hidden;
    z-index: 1;
  }

  .img-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .popup {
    position: absolute;
    bottom: 13vh;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #000000;
    width: 310px;
    border-radius: 10px;
    z-index: 1;

    .btn-close {
      border: none;
      background: transparent;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -10px;
      right: -10px;
      width: calc(63px / 2);
      height: calc(63px / 2);

      img {
        width: calc(63px / 2);
        height: calc(63px / 2);
      }
    }
  }
}

.title {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 200;
  margin: 0 1.75rem;
  text-align: center;
}

.dots {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #7B7875;
  display: inline-block;
  margin: 0 2px;
}

.btn {
  width: 135px;
  height: 45px;
  border: 0;
  border-radius: 10px;
}

.btn-group {
  display: flex;
  justify-content: center;

  .btn {
    width: 135px;
    height: 45px;
    border: 0;
    border-radius: 10px;
    margin: 0 5px;
    color: #ffffff;
    font-size: 18px;
  }

  .btn-gray {
    background-color: #757371;
  }

  .btn-yellow {
    background-color: #aa9b78;
  }
}

.time-group {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 0;

  li {
    list-style: none;
    font-size: 1.25rem;
    font-weight: 500;

    &.active {
      color: #C69649;
    }
  }
}

.white-color {
  background-color: #ffffff;
}

.mb-20 {
  margin-bottom: 20px;
}

.text-title {
  font-size: 16px;
  font-weight: 600;
}
</style>
