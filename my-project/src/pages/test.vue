<template>
    <el-form ref="form" :model="form" label-width="50px">
        <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
            <el-button class="button" @click="remove">删除</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'childrentest',
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      form: {}
    }
  },
  created () {
    this.form = this.item // 注意这个赋值
  },
  methods: {
    remove () {
      this.$emit('removeItem', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.el-form /deep/   .el-form-item{
      width:200px;
      background: green($color: #000000);
    }
</style>
