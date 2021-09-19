import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import BaseTest from '@/components/BaseTest'
// import BaseTest2 from '@/components/BaseTest2'
// import FlexBox from '@/components/FlexBox'
import SingleColumn from '@/components/SingleColumn'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SingleColumn',
      component: SingleColumn
    }
  ]
})
