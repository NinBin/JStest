import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import BaseTest from '@/components/BaseTest'
// import BaseTest2 from '@/components/BaseTest2'
// import FlexBox from '@/components/FlexBox'
// import SingleColumn from '@/components/SingleColumn'
import father from '@/pages/father'
import lodashTest from '@/pages/lodashTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'father',
      component: father
    },
    {
      path: '/lodashTest',
      name: 'lodashTest',
      component: lodashTest
    }
  ]
})
