import { createWebHistory, createRouter } from 'vue-router'
import LogIn from '../pages/LogIn.vue'
import SignUp from '../pages/SignUp.vue'
import HomePage from '../pages/HomePage.vue'
import EmailResetComp from '../components/EmailResetComp.vue'
import AboutPage  from '../pages/AboutPage.vue'
import {auth} from "../firebase"
const routes = [
  { path: '/', component: LogIn,meta:{auth:false} },
  {path:'/reset', component:EmailResetComp},
  { path: '/signup', component: SignUp,meta:{auth:false} },
  {path:'/home', component:HomePage ,meta:{auth:true}},
  {path:'/about',component:AboutPage},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to,from,next)=>{
    const requiresAuth=to.matched.some(recored=>recored.meta.auth);
    const currentUser=auth.currentUser;
  
    if(requiresAuth && !currentUser){
      next("/");
    }else if(!requiresAuth && currentUser){
      next("/home");
    }else{
     next();
    }
  })
export default router