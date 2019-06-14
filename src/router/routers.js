// const home = () => import("components/pages/home/index.vue");
const home = () =>import("../components/pages/home/index.vue")
const routers = [
  {
    path: "/",
    component: home,
    // redirect: "/music",
    // children: [
    //   {
    //     path: "/cloud/home",
    //     component: home,
    //     meta: {
    //       requiresAuth: true
    //     }
    //   },
    //   {
    //     path: "/cloud/me",
    //     component: me,
    //     meta: {
    //       requiresAuth: true
    //     }
    //   },
    //   {
    //     path: "/cloud/find",
    //     component: find,
    //     meta: {
    //       requiresAuth: true
    //     }
    //   },
    //   {
    //     path: "/cloud/project",
    //     component: project,
    //     meta: {
    //       requiresAuth: true
    //     }
    //   },
    //   {
    //     path: "/cloud/shareProject",
    //     component: projectDetail
    //   }
    //   // {
    //   //   path: '/cloud/integralMall',
    //   //   component: integralMall,
    //   //   meta: {
    //   //     requiresAuth: true
    //   //   }
    //   // }
    // ]
  },
];
export default routers;
