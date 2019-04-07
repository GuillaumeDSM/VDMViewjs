import Vue from 'vue'
import Router from 'vue-router'
import VDMList from '@/components/VDMList'
import RandomVDM from '@/components/RandomVDM'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'VDMList',
      component: VDMList
    },
    {
      path: '/random-vdm',
      name: 'RandomVDM',
      component: RandomVDM
    }
  ]
})