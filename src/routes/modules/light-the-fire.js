import LightFireSetfuel from "@/pages/LightFireSetfuelPage.vue";
import LightFireSetcraft from "@/pages/LightFireSetcraftPage.vue";
import LightFireIgnited from "@/pages/LightFireIgnitedPage.vue";
import LightFireIgnited1 from "@/pages/LightFireIgnited1Page.vue";
import LightFireAnimate from "@/pages/LightFireAnimatePage.vue";
// import LightFireTutorial1 from "@/pages/LightFireTutorial1.vue";

export default [
  {
    path: '/light-fire-setfuel',
    name: 'light-fire-setfuel',
    component: LightFireSetfuel,
  },

  {
    path: '/light-fire-setcraft',
    name: 'light-fire-setcraft',
    component: LightFireSetcraft,
  },

  {
    path: '/light-fire-ignited',
    name: 'light-fire-ignited',
    component: LightFireIgnited,
  },

  {
    path: '/light-fire-ignited-1',
    name: 'light-fire-ignited-1',
    component: LightFireIgnited1,
  },
  {
    path: '/light-fire-animate',
    name: 'light-fire-animate',
    component: LightFireAnimate,
  },

  // {
  //   path: '/light-fire-tutorial-1',
  //   name: 'light-fire-tutorial-1',
  //   component: LightFireTutorial1,
  // },
]

