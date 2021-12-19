import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import Saved from "../views/Saved.vue";
import Search from "../views/Search.vue";
//within router to access store you need to import from @/store.
// import store from '@/store';

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/saved",
    name: "Saved",
    component: Saved,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//before entering each route, if not login/signup then redirect to login page.
// router.beforeEach((to, from, next) => {
//   if (
//     to.name !== 'Login' &&
//     to.name !== 'Signup' &&
//     !store.state.isAuthenticated
//   ) {
//     console.log(store.state);
//     next({ name: 'Login' });
//   } else next();
// });

export default router;
