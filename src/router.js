import VueRouter from 'vue-router'

import home from './components/navbar/home.vue'
import contact from './components/navbar/contact.vue'
import cart from './components/navbar/cart.vue'
import search from './components/navbar/search.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/contact',component:contact},
    {path:'/cart',component:cart},
    {path:'/search',component:search}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router