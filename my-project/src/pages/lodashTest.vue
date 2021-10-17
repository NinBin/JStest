<template>
  <div class="lodash-test">数组
      <div class="arrayTest">
          <el-button type="text" @click="arrayTestChunk">Chunk:将数组拆分成多个{{size}}长度的区块,并组成一个新的数组</el-button>
          <el-button type="text" @click="arrayTestCompact">Compact:创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。</el-button>
          <el-button type="text" @click="arrayTest3">444</el-button>
          <el-button type="text" @click="open"></el-button>
      </div>
      <div>集合</div>
  </div>
</template>

<script>
import _ from 'loadsh'
export default {
  name: 'loadshTest',
  components: {

  },
  data () {
    return {
      size: 2,
      array1: ['a', 'b', 'c', 'd', 'e'],
      arrayCompact: [0, 1, false, 2, '', 3, null, undefined, NaN]
    }
  },
  methods: {
    arrayTestChunk () {
      var arrayRes = _.chunk(this.array1, this.size)
      console.log(arrayRes)
      this.$alert(`处理${this.array1}的结果为${arrayRes}`, 'chunk测试', {
        confirmButtonText: '确定'
      })
    },
    arrayTestCompact () {
      var compactRes = _.compact(this.arrayCompact)
      this.$alert(`处理的结果为${compactRes}`, 'compact测试', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.lodash-test{
    text-align: left;
    background-color: red($color: #000000);
    .arrayTest{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .el-button{
        margin-left:0px;
    }

}
</style>
