import Vue from "vue"
// 路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 2.1 导入 vue-resource  支持发送请求的模块
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

import 'bootstrap/dist/css/bootstrap.min.css'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 导入mint-ui组件
import {
  Header,
  Navbar,
  TabItem,
  Cell,
  Swipe,
  SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header)



// 导入 App 根组件
import app from './App.vue'
// 导入路由
import router from './router.js'
// 设置请求根地址
Vue.http.options.root = "http://www.liulongbin.top:3005"
// 全局启用 emulateJSON 选项 允许跨域请求
Vue.http.options.emulateJSON = true;

var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router
})