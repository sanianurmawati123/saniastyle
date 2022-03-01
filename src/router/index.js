import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/contact.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/Produk.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
