<template>
  <div class="view-bonfire">
    <div class="overlay" />

    <div class="view-bonfire__wrap">
      <div class="view-bonfire__img">
        <img src="@/assets/images/bonfiresheet.png" alt="bonfiresheet" class="img img__bonfiresheet">
        <fire-video
          :duration="durationInMinutes"
          ref="videoCampFire"
          class="img img__fire"
          src="video/fire.mp4" />
      </div>

      <img src="@/assets/images/effect_firelight.png" alt="effectfirelight" class="view-bonfire__flare">
    </div>

    <tour-guide
      @closeModal="modalActive = false"
      :modal-active="modalActive"
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

    <audio-sound src="/audio/birdsong.mp3" :action="isPlayed" />

    <audio-sound
      @ended="onEndAudio"
      :action="campFire"
      :duration="durationInMinutes"
      ref="audioCampFire"
      src="/audio/campfire-crackling.mp3"/>

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

    <view-bonfire-footer @tabClick="tabClick" :active-tab="activeTab" :footer-items="footerItems"/>

    <img class="img-footer" src="@/assets/images/footer.png" alt="footer">
  </div>
</template>

<script setup>
import ViewBonfireFooter from '@/components/ViewBonfireFooter.vue'
import TourGuide from '@/components/TourGuide.vue';
import AudioSound from "@/components/AudioSound.vue";
import FireVideo from "@/components/FireVideo.vue";

import {ref} from 'vue'

import {useRouter} from "vue-router";

const router = useRouter()

const slides = ref([])
const footerItems = ref([])
const timers = ref([])
const tutorialStep = ref(1)
const activeTab = ref(0)
const durationInMinutes = ref(20) // 20 minutes default
const audioCampFire = ref(null)
const videoCampFire = ref(null)
const isPlayed = ref(false)
const campFire = ref(true)

let modalActive = ref(true)

slides.value = [
  {
    id: 1,
    target: '',
    content: 'こちらは焚き火を眺めるモードです 主な機能を説明します'
  },
  {
    id: 2,
    target: '#nav-1',
    content: `サウンドボタンをタップすると サウンドの再生、選択ができます`
  },
  {
    id: 3,
    target: '#nav-2',
    content: `タイマーをセットすると 設定した時間で火が消えます 設定しない場合は20分で終了します`
  },
  {
    id: 4,
    target: '#nav-3',
    content: `終了したい時は消火を タップしてください`
  },
]

timers.value = [
  {
    id: 1,
    text: '3分',
    time: 3 // 3 minutes
  },
  {
    id: 2,
    text: '10分',
    time: 10 // 10 minutes
  },
  {
    id: 3,
    text: '8時間',
    time: 480 // 8 hours
  }
]

footerItems.value = [
  {
    tab: 1,
    url: require('@/assets/images/icon_bgm.png'),
    activeUrl: require('@/assets/images/icon_bgm_active.png'),
    text: "サウンド",
  },
  {
    tab: 2,
    url: require('@/assets/images/icon_timer.png'),
    activeUrl: require('@/assets/images/icon_timer_active.png'),
    text: "タイマー",
  },
  {
    tab: 3,
    url: require('@/assets/images/icon_exit.png'),
    activeUrl: require('@/assets/images/icon_exit_active.png'),
    text: "消火",
  }
]

const onEndAudio = () => {
  setTimeout(() => {
    router.push('/exit1')
  }, 500)
}

const setTimer = (time) => {
  durationInMinutes.value = time
}

const approveTimer = () => {
  console.log(durationInMinutes.value, 'minutes')
}

const nextPage = () => {
  videoCampFire.value.ended()
  audioCampFire.value.ended()
  router.push('/exit1')
}

const playBirdSong = () => {
  isPlayed.value = true
}

const endBirdSong = () => {
  isPlayed.value = false
}

const nextStep = () => {
  tutorialStep.value < 4 ? tutorialStep.value++ : modalActive.value = false
}

const prevStep = () => {
  tutorialStep.value--
}

const tabClick = (currentTab) => {
  activeTab.value = currentTab
}

const handleClosePopup = () => {
  activeTab.value = 0
}
</script>

<style scoped lang="scss">
.view-bonfire {
  background-image: url(@/assets/images/bg_kareha.png);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;

  &__img {
    position: relative;
    top: 15px;
    max-width: 300px;
    max-height: 300px;
    margin: auto;

    .img {
      max-width: 100%;
      max-height: 100%;
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
