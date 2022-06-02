import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/index",
    name: "index",
    component: index,
  },
  {
    path: "/drag-page",
    name: "dragPage",
    component: () => import('@/views/drag-page/index'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
