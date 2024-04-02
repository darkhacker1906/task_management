import { createWebHistory, createRouter } from "vue-router";
import LogIn from "../pages/LogIn.vue";
import SignUp from "../pages/SignUp.vue";
import HomePage from "../pages/HomePage.vue";
import EmailResetComp from "../components/EmailResetComp.vue";
import Navbar from "../layouts/Navbar.vue";
import { auth } from "../firebase";
import AboutPage from '../pages/AboutPage.vue';
import ContactPage from '../pages/ContactPage.vue'
import NavBars from '../components/NavBars.vue'
const routes = [
  { path: "/", component: LogIn, meta: { auth: false } },
  { path: "/reset", component: EmailResetComp },
  { path: "/signup", component: SignUp, meta: { auth: false } },
  // {path:"/home", component:HomePage,meta:{auth:true,layout:NavBars}},
  // {path:"/about",component:AboutPage, meta:{auth:true}},
  // {path:"/contact",component:ContactPage,meta:{auth:true}}
  { path: "/home", component: HomePage,name:'Home', meta: { auth: true, layout: Navbar } },
  {path:'/about', component:AboutPage,name:'About',meta:{auth:true, layout:NavBars}},
  {path:'/contact',component:ContactPage,name:'Contact',meta:{auth:true}}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((recored) => recored.meta.auth);
  const currentUser = auth.currentUser;
  if (requiresAuth && !currentUser) {
    next("/");
  } else if (!requiresAuth && currentUser) {
    next("/home");
  } else {
    next();
  }
});
export default router;
