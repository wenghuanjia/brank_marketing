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
    path: "/e-detail/:id",
    name: "EnterpriseDetail",
    component: () =>
      import(/* webpackChunkName: "enterprise-detail" */ "../views/e-detail/"),
  },
  {
    path: "/shop-detail/:id",
    name: "ShopDetail",
    component: () =>
      import(/* webpackChunkName: "shop-detail" */ "../views/shop-detail/"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/login/"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register/"),
  },
  {
    path: "/forget",
    name: "Forget",
    component: () =>
      import(/* webpackChunkName: "forget" */ "../views/forget/"),
  },
  {
    path: "/extension",
    name: "Extension",
    component: () =>
      import(/* webpackChunkName: "extension" */ "../views/extension/"),
  },
  {
    path: "/404",
    name: "error",
    component: () => import(/* webpackChunkName: "error" */ "../views/error/"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
