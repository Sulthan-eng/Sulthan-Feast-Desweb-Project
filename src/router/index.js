import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import MenuPage from "@/pages/MenuPage.vue";
import RoomPage from "@/pages/RoomPage.vue";
import SouvenirsGiftsPage from "@/pages/SouvenirsGiftsPage.vue";
import AboutUsPage from "@/pages/AboutUsPage.vue";
import ReservationPage from "@/pages/ReservationPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/menu",
    name: "Menu",
    component: MenuPage,
  },
  {
    path: "/room",
    name: "Room",
    component: RoomPage,
  },
  {
    path: "/souvenirs",
    name: "Sourvenirs & Gifts",
    component: SouvenirsGiftsPage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUsPage,
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: ReservationPage,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
