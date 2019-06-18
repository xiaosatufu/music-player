// const home = () => import("components/pages/home/index.vue");
const home = () =>import("../components/pages/home")
const account = () =>import("../components/pages/account")
const video = () =>import("../components/pages/video")
const follow = () =>import("../components/pages/account/follows.vue")
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
      path:"/account/follows",
      component:follow
  },
  {
    path: "/video",
    component: video,
  }
];
export default routers;
