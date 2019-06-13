const bonus = () => import("components/pages/cloud/activity/bonus");
const cloud = [
  {
    path: "/cloud",
    component: cloudPage,
    redirect: "/cloud/home",
    children: [
      {
        path: "/cloud/home",
        component: home,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/cloud/me",
        component: me,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/cloud/find",
        component: find,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/cloud/project",
        component: project,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/cloud/shareProject",
        component: projectDetail
      }
      // {
      //   path: '/cloud/integralMall',
      //   component: integralMall,
      //   meta: {
      //     requiresAuth: true
      //   }
      // }
    ]
  },
];
export default cloud;
