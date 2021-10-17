<template>
  <div id="app">
    <test v-for="(item,index) in list" :item='item' :index='index' :key='index' @removeItem='removeItem' />
    <el-button @click="addItem">添加</el-button>
    <el-button @click="jumpToLodashTest">lodash测试入口</el-button>
  </div>
</template>

<script>
import test from '@/pages/test'

export default {
  name: 'father',
  components: {
    test
  },
  data () {
    return {
      list: [
        {
          name: '乔治1'
        },
        {
          name: '乔治2'
        },
        {
          name: '乔治3'
        }
      ]
    }
  },
  // 父组件methods
  methods: {
    // 删除元素
    removeItem (i) {
      this.list.splice(i, 1)
    },
    // 添加元素
    addItem () {
      var num = this.list.length + 1
      this.list.push({name: '乔治' + num})
    },
    jumpToLodashTest () {
      this.$router.push('lodashTest')
    }
  },
  created () {
    // this.form = this.item // 注意这个赋值
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
