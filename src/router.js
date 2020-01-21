import HomePage from './components/HomePage.vue'
import InfoPersonal from './components/InfoPersonal.vue'
import Vue from "vue";
import Router from "vue-router";
// import store from "./store";


Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/PersonalI",
      name: "InfoPersonal",
      component: InfoPersonal
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//     if (store.state.authId) {
//       next();
//     } else {
//       next({ name: "HomePage" });
//     }
//   } else {
//     next();
//   }
// });

export default router;