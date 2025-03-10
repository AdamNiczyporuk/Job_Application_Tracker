import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Login from '@/views/login.vue'
import Register from '@/views/register.vue'
import WritingCV from '@/views/writingCV.vue'





const routes = [
  { 
    path:"/",
    redirect : "/login"
  },
    { path: '/home',
      name:"Home",
      component: Home,
      meta:{
        requiresAuth:true,
      }

     },
    { path: '/login',
      name:"Login",
      component: Login },

    {path: '/register',
      name:"Register",
      component: Register},
    {path: '/writingCV',
    name:"WritingCV",
    component: WritingCV,
    meta:{
      requiresAuth:true,
    }},
      
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); 
  } else {
    next();  
  }
});
  
  export default router;