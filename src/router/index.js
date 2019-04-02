import Vue from 'vue'
import Router from 'vue-router'
import VDMList from '@/components/VDMList'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'VDMList',
      component: VDMList
    }
  ]
})