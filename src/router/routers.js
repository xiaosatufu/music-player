// const home = () => import("components/pages/home/index.vue");
const home = () =>import("../components/pages/home")
const account = () =>import("../components/pages/account")
const video = () =>import("../components/pages/video")
const routers = [
  {
    path: "/",
    component: home,
  },
  {
    path: "/account",
    component: account,
  },
  {
    path: "/video",
    component: video,
  }
];
export default routers;
