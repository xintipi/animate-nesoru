// pages
// import HelloWorldVue from '@/pages/HelloWorld.vue';
// import MainPage from '@/pages/MainPage.vue';
import MainPage from "@/pages/MainPage.vue";
import WoodDrag from "@/pages/WoodDrag.vue";
import IgniteFirePage from "@/pages/IgniteFirePage.vue";
import SoundAlertPage from "@/pages/SoundAlertPage.vue";
import TopPage from "@/pages/TopPage.vue";
import SetCraftPage from "@/pages/SetCraftPage.vue";
import ViewBonfirePage from "@/pages/ViewBonfirePage.vue";
import CraftPage from "@/pages/CraftPage.vue";
import Exit1Page from "@/pages/Exit1Page.vue";
import Exit2Page from "@/pages/Exit2Page.vue";
import SetFuelPage from "@/pages/SetFuelPage.vue";
import VideoPage from "@/pages/VideoPage.vue";

// modules
import LightFireRoute from "@/routes/modules/light-the-fire";

export const routes = [

  {
    path: "/",
    name: "sound-alert",
    component: SoundAlertPage,
  },

  {
    path: "/top",
    name: "top",
    component: TopPage,
  },

  {
    path: "/main",
    name: "main",
    component: MainPage,
  },

  {
    path: "/set-craft",
    name: "set-craft",
    component: SetCraftPage,
  },

  {
    path: "/craft",
    name: "craft",
    component: CraftPage,
  },

  {
    path: "/wood-drag",
    name: "wood-drag",
    component: WoodDrag,
  },
  {
    path: "/ignite",
    name: "ignite",
    component: IgniteFirePage,
  },

  {
    path: "/exit1",
    name: "exit1",
    component: Exit1Page,
  },

  {
    path: "/exit2",
    name: "exit2",
    component: Exit2Page,
  },

  {
    path: "/view-bonfire",
    name: "view-bonfire",
    component: ViewBonfirePage,
  },

  {
    path: "/set-fuel",
    name: "set-fuel",
    component: SetFuelPage,
  },

  {
    path: "/video",
    name: "video",
    component: VideoPage,
  },

  ...LightFireRoute,
];
