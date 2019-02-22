
import Vue from "vue"

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'


import { Header,Navbar, TabItem,Cell } from 'mint-ui';

Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header)



// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el: '#app',
  render: c => c(app)
})