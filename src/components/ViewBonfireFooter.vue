<template>
  <nav class="nav-menu">
    <a
      v-for="item in footerItems" :key="item.tab"
      @click="handleTabClick(item.tab)"
      :id="`nav-${item.tab}`"
      class="nav-menu__item">

      <div class="nav-img">
        <img
          :src="activeTab === item.tab ? item.activeUrl : item.url"
          alt="icon">
      </div>
      <p
        class="nav-text"
        :class="activeTab === item.tab ? 'yellow-color': ''" >
        {{ item.text }}
      </p>
    </a>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  footerItems: {
    type: Array,
    default: () => [],
  },
  activeTab: {
    type: Number,
    default: 0,
  }
})

const emit = defineEmits(["tabClick"]);

const handleTabClick = (currentTab) => {
  emit('tabClick', currentTab)
}
</script>

<style scoped lang="scss">
.yellow-color {
  color: #e2aa4f
}

.nav-menu {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  z-index: 3;

  &__item {
    position: relative;
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &:nth-child(3) {
      .nav-img {
        width: 25px;
      }
    }

    .nav-img {
      width: 35px;
      height: 35px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .nav-text {
      margin: 0;
    }
  }
}
</style>
