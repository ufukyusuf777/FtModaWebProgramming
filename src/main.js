import Vue from 'vue'
import VueRouter from 'vue-router'
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'
import App from './App.vue'
import Home from "./components/Home";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import Sss from "@/components/Sss";



Vue.use(VueRouter)
Vue.component('BadgerAccordion', BadgerAccordion)
Vue.component('BadgerAccordionItem', BadgerAccordionItem)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/signup', component: SignUp},
    {path: '/signin', component: SignIn},
    {path: '/sss', component: Sss},



  ]
})

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
