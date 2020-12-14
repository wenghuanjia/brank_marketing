import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/layout/"),
    children: [
      {
        path: "",
        name: "Scan",
        component: () =>
          import(/* webpackChunkName: "scan" */ "../views/scan/"),
      },
      {
        path: "/shop",
        name: "Shop",
        component: () =>
          import(/* webpackChunkName: "shop" */ "../views/shop/"),
      },
      {
        path: "/enterprise",
        name: "Enterprise",
        component: () =>
          import(/* webpackChunkName: "enterprise" */ "../views/enterprise/"),
      },
      {
        path: "/profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "profile" */ "../views/profile/"),
      },
    ],
  },
  {
    path: "/shop-detail/:id",
    name: "ShopDetail",
    component: () =>
      import(/* webpackChunkName: "shop-detail" */ "../views/shop-detail/"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
