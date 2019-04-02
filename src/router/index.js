import Vue from 'vue'
import Router from 'vue-router'
import VDMForm from '@/components/VDMForm'
import VDMList from '@/components/VDMList'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/create-vdm',
      name: 'VDMForm',
      component: VDMForm
    },
    {
      path: '/',
      name: 'VDMList',
      component: VDMList
    }
  ]
})